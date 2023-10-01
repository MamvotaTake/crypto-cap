import React from 'react'
import styled from 'styled-components'
import HighRates from '../../assets/chart-state-plus.png'
import LowRates from '../../assets/chart-state-minus.png'

const Price = styled.p`
  color: #11011e;
  font-family: "Roboto";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const Percentage = styled.span`
  font-family: "Roboto";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  /* 1.8rem */
  margin-top: 2rem;
`

const ChartImage = styled.img`
  width: 9.25rem;
  height: 7.32944rem;
`
const StyledRates = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  margin-top: 0.5rem;
`

function Rates ({ coin }) {
  const { current_price, price_change_percentage_24h } = coin
  return (
    <StyledRates>
      <div>
        <Price>
          ${current_price}
        </Price>

        <Percentage
          style={{
            color: price_change_percentage_24h < 0 ? 'red' : 'green'
          }}
        >
          {price_change_percentage_24h}%
        </Percentage>
      </div>
      <ChartImage
        src={
          price_change_percentage_24h < 0 ? `${LowRates}` : `${HighRates}`
        }
        alt=''
      />
    </StyledRates>
  )
}

export default Rates
