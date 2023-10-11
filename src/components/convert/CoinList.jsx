import React, { useEffect } from 'react'
import Modal from '../Modal'
import Heading from '../Heading'
import Input from '../Input'
import Form from '../form/Form'
import FormRow from '../form/FormRow'
import styled, { css } from 'styled-components'
import {
  HiOutlineMagnifyingGlass,
  HiOutlineMagnifyingGlassCircle
} from 'react-icons/hi2'
import Coin from './Coin'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllCoins } from '../../features/coins/coinsSlice'

const StyledCoin = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  overflow-y: scroll;
  transition: all .3s ease;

  /* width */
  &::-webkit-scrollbar {
    transition: all .3s ease;
    width: 1rem;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    margin-top: 1rem;

    box-shadow: inset 0 0 1px grey;
    border-radius: .4rem;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--color-lime-600);
    border-radius: .4rem;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-lime-100);
  }
`

const Stacked = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  text-align: right;

  ${props =>
    props.type === 'search' &&
    css`
    background-color: var(--color-grey-100);
    padding: .2rem;
    border-top-right-radius: var(--border-radius-sm);
    border-bottom-right-radius: var(--border-radius-sm);
    cursor: pointer;

    
  `} & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  & svg {
    margin-left: .7rem;
    width: 3rem;
    height: 2rem;
    color: var(--color-lime-400);
    transition: all .4s ease-in;

    &:hover {
      transform: scale(1.3) rotate(-15deg);
      color: var(--color-grey-500);
    }
  }
`

const CoinListHeader = styled.header`
  /* border-bottom: 1px solid var(--wireframe-color-light-grey, #eaeaea); */
  box-shadow: 0px 1px 1px 0px rgba(223, 221, 221, 0.75);
  overflow: hidden;
  /* background-color: #f0f7f6; */
`

function CoinList () {
  const coins = useSelector(selectAllCoins)
    const isLoading = useSelector(state => state.coins.isLoading)
    console.log(coins)

//   const { coins } = useSelector(store => store.coin)
  const dispatch = useDispatch()

  /* const slicedItems = coins
    .slice(0, 7)
    .sort((a, b) => a.price_change_24h - b.price_change_24h)
 */
  useEffect(
    function () {
      async function laodCoins () {
        try {
          dispatch(fetchCoins())
        } catch (error) {}
      }
      laodCoins()
    },
    [dispatch]
  )
  return (
    <Modal>
      <CoinListHeader>
        <Heading as='h3'>Select Coin to Convert (from)</Heading>
        <FormRow label='Search' type='search'>
          <Input type='search' id='name' placeholder='Bitcoin' />
          <Stacked type='search'>
            <HiOutlineMagnifyingGlass />
          </Stacked>
        </FormRow>
      </CoinListHeader>
          <StyledCoin>
              {coins.map((coin, index) => <Coin key={index} coin={coin}/>)}
      </StyledCoin>
    </Modal>
  )
}

export default CoinList
