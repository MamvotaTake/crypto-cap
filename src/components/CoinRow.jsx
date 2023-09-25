import React from 'react'
import Table from './table/Table'
import styled from 'styled-components'
import itsHigh from '../assets/chart-state-plus.png'
import itsLow from '../assets/chart-state-minus.png'

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
function CoinRow ({
  coin: {
    id,
    name,
    symbol,
    current_price,
    percent_change_24h,
    price_change_percentage_24h,
    image,
    market_cap_change_percentage_24h,
    price_change_24h
  },
  index
}) {
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
        <p>...</p>
      </Stacked>
    </Table.Row>
  )
}

export default CoinRow
