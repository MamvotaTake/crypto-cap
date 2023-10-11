import React from 'react'
import Table from './table/Table'
import styled from 'styled-components'
import { HiArrowSmallDown, HiArrowSmallUp } from 'react-icons/hi2'
import Modal from './Modal'
import Button from './button/Button'
import CoinDetails from '../features/coins/CoinDetails'
import Spinner from './Spinner'
import { selectAllCoins } from '../features/coins/coinsSlice'

const Stacked = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  text-align: right;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`

const Image = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  flex-shrink: 0;
`
function CoinRow ({ coin, index }) {

  const {
    market_cap_rank: coinId,
    name,
    symbol,
    current_price,
    percent_change_24h,
    price_change_percentage_24h,
    image,
    market_cap_change_percentage_24h,
    price_change_24h,
    high_24h,
    low_24h,
    total_volume
  } = coin

  

  return (
    <Table.Row>
      <Stacked>
        <Image src={image} alt='' />
        {/* {name} */}
        <span>
          {/* {name} */}
          {symbol}
        </span>
      </Stacked>
      <Stacked>
        $ {current_price.toFixed(2)}
      </Stacked>

      <Stacked
        style={{ color: price_change_percentage_24h < 0 ? 'red' : 'green' }}
      >
        {price_change_percentage_24h.toFixed(2)}%
        {price_change_percentage_24h > 0
          ? <HiArrowSmallUp />
          : <HiArrowSmallDown />}
      </Stacked>
      <Stacked>
        {`${high_24h.toFixed(2)} / ${low_24h.toFixed(2)}`}
      </Stacked>
      <Stacked>
        {price_change_24h.toFixed(2)}
      </Stacked>
      <Stacked>
        {market_cap_change_percentage_24h.toFixed(2)}
      </Stacked>
      <Stacked>
        <Modal>
          <Modal.Open opens='trade'>
            <Button size='small'>details</Button>
          </Modal.Open>
          <Modal.Window name='trade'>
            <CoinDetails coin={coin} />
          </Modal.Window>
        </Modal>
      </Stacked>
    </Table.Row>
  )
}

export default CoinRow
