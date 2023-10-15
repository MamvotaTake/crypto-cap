import React from 'react'
import styled from 'styled-components'
import CoinHeader from '../../features/coins/CoinHeader'
import TradeTableOperations from '../TradeTableOperations'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllCoins } from '../../features/coins/coinsSlice'
import CoinDetails from '../../features/coins/CoinDetails'
import Spinner from '../Spinner'
import { useEffect } from 'react'
import TradingViewWidget from './TradingViewWidget'
// import TradingViewWidget, { Themes } from 'react-tradingview-widget'

const StyledMarketsContainer = styled.div`
  display: flex;
  /* width: 34.7%; */
  height: 100vh;
  flex-direction: column;
  gap: 1rem;
  margin-top: 8rem;
`

const Market = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: .1rem;
  column-gap: 1rem;
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
      <TradingViewWidget/>
    </StyledMarketsContainer>
  )
}

export default MarketContainer
