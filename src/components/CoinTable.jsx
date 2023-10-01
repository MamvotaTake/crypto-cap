import React, { useEffect, useState } from 'react'
import Table from './table/Table'
import CoinRow from './CoinRow'
import Pagination from './Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { coin } from '../features/coins/coinSlice'
import styled from 'styled-components'

const Error = styled.div`
  background-color: var(--color-lime-50);
`
function CoinTable () {
  const { coins } = useSelector(store => store.coin)
  const dispatch = useDispatch()
  // console.log(coins)

  useEffect(
    function () {
      async function laodCoins () {
        try {
           dispatch(coin())
        } catch (error) {}
      }
      laodCoins()
    },
    [dispatch]
  )

  // if(!coins.length) return <Error>There is a problem with server, please write us an email!</Error>

  return (
    <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
      <Table.Header scope='row'>
        <div>NAME</div>
        <div>CURRENT PRICE</div>
        <div>CHANGE</div>
        <div>MARKET STATS</div>
        <div>TRADE</div>
      </Table.Header>

      <Table.Body
        data={coins}
        render={(coin, index) =>
          <CoinRow key={index} coin={coin} index={coin.id} />}
      />

      <Table.Footer>
        <Pagination />
      </Table.Footer>
    </Table>
  )
}

export default CoinTable
