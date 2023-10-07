import React, { useEffect } from 'react'
import styled from 'styled-components'
import Row from './Row'
import Card from './cards/Card'
import CoinInfo from '../features/coins/CoinInfo'
import Rates from '../features/coins/Rates'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoins, selectAllCoins, selectTotalCoins } from '../features/coins/coinsSlice'
import Spinner from './Spinner'

const StyledTrends = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  overflow-y: auto;
  padding: 3rem 5.625rem;

`

function Trends () {
  const coins = useSelector(selectAllCoins) || {}
  const isLoading = useSelector(state => state.coins.isLoading)
  
  const dispatch = useDispatch()


  useEffect(
    () => {
      function getCoins () {
        dispatch(fetchCoins())
      }
      getCoins()
    },
    [dispatch]
  )

  if(isLoading) return <Spinner/>

  return (
    <StyledTrends>
      <h1>Market Trend</h1>
      <Row type='horizontal'>
        <>
          {coins.map(coin => 
            <Card key={coin.id}>
              <CoinInfo coin={coin } />
              <Rates coin={coin }/>
            </Card>
          ).sort(
            (a, b) =>
              a.price_change_percentage_24 - b.price_change_percentage_24
          )
          .slice(0, 4)}
        </>
      </Row>
    </StyledTrends>
  )
}

export default Trends
