import React, { useEffect } from 'react'
import styled from 'styled-components'
import Row from './Row'
import Card from './cards/Card'
import CoinInfo from '../features/coins/CoinInfo'
import Rates from '../features/coins/Rates'
import { useDispatch, useSelector } from 'react-redux'
import { coin } from '../features/coins/coinSlice'

const StyledTrends = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  overflow: hidden;
  padding: 3rem 5.625rem;
  /* scroll-behavior: smooth;
    scrollbar-arrow-color: red; */
`

function Trends () {
  const { coins } = useSelector(state => state.coin)
  const dispatch = useDispatch()
  const sortedCoins = [...coins]

  console.log(sortedCoins.sort(
    (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h
  ))

  useEffect(
    () => {
      function getCoins () {
        dispatch(coin())
      }
      getCoins()
    },
    [dispatch]
  )

  // sort by price_change_percentage_24h

  /* coins.sort(
    (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h
  ) */
  return (
    <StyledTrends>
      <h1>Market Trend</h1>
      <Row type='horizontal'>
        <>
          {sortedCoins
          .sort(
            (a, b) =>
              a.price_change_percentage_24 - b.price_change_percentage_24
          )
          .slice(0, 3)
          .map(coin => 
            <Card key={coin.id}>
              <CoinInfo coin={coin } />
              <Rates coin={coin }/>
            </Card>
          )}
        </>
      </Row>
    </StyledTrends>
  )
}

export default Trends
