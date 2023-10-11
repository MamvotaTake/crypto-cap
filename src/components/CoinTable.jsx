import React, { useEffect, useState } from 'react'
import Table from './table/Table'
import CoinRow from './CoinRow'
import Pagination from './Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { coin } from '../features/coins/coinSlice'
import styled from 'styled-components'
import {
  fetchCoins,
  selectAllCoins,
  selectTotalCoins
} from '../features/coins/coinsSlice'
import Spinner from './Spinner'

const Error = styled.div`background-color: var(--color-lime-50);`
function CoinTable () {
  const coins = useSelector(selectAllCoins)
  const isLoading = useSelector(state => state.coins.isLoading)
  const dispatch = useDispatch()

  console.log(isLoading)

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
    <Table>
      <Table.Header scope='row'>
        <h5>Coin</h5>
        <h5>Price</h5>
        <h5>24h Change</h5>
        <h5>24h High/24h Low</h5>
        <h5>Price Change 24h</h5>
        <h5>Market Cap</h5>
        <h5>Operation</h5>
        <div />
      </Table.Header>
      {isLoading
        ? <Spinner />
        : <Table.Body
          data={coins}
          render={(coin, index) =>
            <CoinRow key={index} coin={coin} index={coin.id} />}
          />}

      <Table.Footer>
        <Pagination />
      </Table.Footer>
    </Table>
  )
}

export default CoinTable
