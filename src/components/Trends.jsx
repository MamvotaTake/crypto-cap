import React, { useEffect } from 'react'
import styled from 'styled-components'
import Row from './Row'
import Card from './cards/Card'
import CoinInfo from '../features/coins/CoinInfo'
import Rates from '../features/coins/Rates'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoins, selectAllCoins, selectTotalCoins } from '../features/coins/coinsSlice'
import Spinner from './Spinner'
import { motion } from 'framer-motion'

const StyledTrends = styled(motion.div)`
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
      <motion.h1
        initial={{ opacity: 0.5, visibility: "hidden" }}
        transition={{ duration: 2.9, opacity: 0, }}
        whileInView={{ opacity: 1, visibility: "visible"}}>
        Market Trend
      </motion.h1>
      <Row type='horizontal' >
        <>
          {coins.map(coin => 
            <Card key={coin.id}
              initial={{ opacity: 0, translateY: ('-200px') }}
              transition={{ duration: 1.6 }}
              whileInView={{opacity: 1, translateY: ('0px') }}
              >
              
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
