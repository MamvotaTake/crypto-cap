import React, { useEffect, useState } from 'react'
import Table from './table/Table'
import CoinRow from './CoinRow'

function CoinTable () {
  const [coins, setCoins] = useState('')
  useEffect(() => {
    async function loadCoins () {
      const response = await fetch('http://localhost:8000/coins')
      const data = await response.json()
      setCoins(data)
    }
    loadCoins()
  }, [])
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
          <CoinRow key={index} coin={coin} index={index} />}
      />

      <Table.Footer>
        <p>Pagination</p>
      </Table.Footer>
    </Table>
  )
}

export default CoinTable
