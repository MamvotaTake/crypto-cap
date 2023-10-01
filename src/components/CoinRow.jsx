import React from 'react'
import Table from './table/Table'
import styled from 'styled-components'
import itsHigh from '../assets/chart-state-plus.png'
import itsLow from '../assets/chart-state-minus.png'
import Menus from './Menus'
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2'
import Modal from './Modal'
import Button from './button/Button'

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
    price_change_24h
  } = coin

  return (
    <Table.Row>
      <Stacked>
        <Image src={image} alt='' />
        {/* {name} */}
        <span>
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
      </Stacked>
      <Stacked>
        {market_cap_change_percentage_24h > 0
          ? <img src={itsHigh} alt='' />
          : <img src={itsLow} alt='' />}
      </Stacked>
      <Stacked>
        <Modal>
          <Modal.Open opens='trade'>
            <Button size='small'>Trade</Button>
          </Modal.Open>
          <Modal.Window name='trade'>
            <p>Trade</p>
        </Modal.Window>
        </Modal>
      </Stacked>
    </Table.Row>
  )
}

export default CoinRow