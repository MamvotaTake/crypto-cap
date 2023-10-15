import React from 'react'
import styled from 'styled-components'
import TradeTableOperations from '../../components/TradeTableOperations'
import CoinHeader from './CoinHeader'
import {
  HiArrowSmallDown,
  HiArrowSmallUp,
  HiOutlineStar
} from 'react-icons/hi2'
import Stacked from '../../components/Stacked'
import isHigh from '../../assets/chart-state-plus.png'
import isLow from '../../assets/chart-state-minus.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  z-index: 1;
`
const Coin = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: .9s;
  transform: translateY(-11.5rem);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: -1;

  &:hover {
    transform: translateY(18%);
  }

  & p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12rem;

    & img {
      width: 4rem;
    }

    & svg {
      width: 2rem;
      height: 2rem;
      /* color: red; */
      cursor: pointer;
      transition: all .4s ease-in-out;

      &:hover {
        color: #03658c;
      }
    }

    & span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      font-weight: 900;
      background-color: var(--color-grey-600);
      color: var(--color-grey-0);
      text-transform: uppercase;
      padding: .3rem;
      border-radius: var(--border-radius-sm);
      transition: all .3s ease-in;
      cursor: pointer;

      &:hover {
        background-color: var(--color-grey-500);
      }
    }
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  padding: 1rem;

  & div {
    display: flex;
    justify-content: space-between;
  }
`
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: var(--color-grey-600);
  border-radius: 2%;
  /* margin-bottom: 2rem; */
  transition: .9s ease-in-out;
  transform: translateY(100px);
  z-index: 1;

  /* &:hover {
    transform: translateY(-30%);
  } */

  & img {
    /* width: 20rem; */
  }
`

const Chart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
function CoinDetails ({ coin }) {
  const {
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
    high_24h,
    low_24h,
    total_volume,
    market_cap_rank
  } = coin
  return (
    <Container>
      {/* <CoinHeader/> */}
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
      <Coin>
        <p>
          <span>
            {symbol}
            <img src={image} alt={name} />
          </span>

          <HiOutlineStar />
        </p>
        <Content>
          <div>
            <p>Current Price</p>
            <p>
              $ {current_price}
            </p>
          </div>
          <div>
            <p>24h Change</p>
            <p
              style={{
                color: price_change_percentage_24h < 0 ? 'red' : 'green'
              }}
            >
              {price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
          <div>
            <p>24h High</p>
            <p>
              {high_24h}
            </p>
          </div>
          <div>
            <p>24h Low</p>
            <p>
              {low_24h}
            </p>
          </div>
          <div>
            <p>Total Volume</p>
            <p>
              {total_volume}
            </p>
          </div>
          <Chart
            style={{
              color: price_change_percentage_24h < 0 ? 'red' : 'green'
            }}
          >
            {`Rank ≈ ${market_cap_rank}`}
            {price_change_percentage_24h > 0
              ? <img src={isHigh} alt='' />
              : <img src={isLow} alt='' />}
          </Chart>
        </Content>
      </Coin>
    </Container>
  )
}

export default CoinDetails
