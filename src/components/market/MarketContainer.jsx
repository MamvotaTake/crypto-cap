import React from 'react'
import styled from 'styled-components'
import CoinHeader from '../../features/coins/CoinHeader'
import TradeTableOperations from '../TradeTableOperations'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllCoins } from '../../features/coins/coinsSlice'
import CoinDetails from '../../features/coins/CoinDetails'
import Spinner from '../Spinner'
import { useEffect } from 'react'

const StyledMarketsContainer = styled.div`
  display: flex;
  width: 34.7%;
  flex-direction: column;
  gap: 3rem;
  margin-top: 8rem;
`

const Market = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 4rem;
  column-gap: 3rem;
`
function MarketContainer () {
  const coins = useSelector(selectAllCoins)
  const isLoading = useSelector(state => state.coins.isLoading)
  const dispatch = useDispatch()


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
    <StyledMarketsContainer>
      <CoinHeader header='Markets' />
      <TradeTableOperations />
      {isLoading
        ? <Spinner />
        : <Market>
          {coins.map((coin, index) =>
            <CoinDetails key={index} coin={coin} />
            )}
        </Market>}
    </StyledMarketsContainer>
  )
}

export default MarketContainer
