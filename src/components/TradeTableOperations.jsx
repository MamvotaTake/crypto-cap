import React from 'react'
import TableOperations from './table/TableOperations'
import Filter from './Filter'

function TradeTableOperations ({coin}) {
  return (
    <TableOperations>
      <Filter
        filterField='filterBy'
        options={[
          /* { value: 'favorites', label: 'Favorites' },
          { value: 'spot-markets', label: 'Spot Markets' },
          { value: 'future-markets', label: 'Future Markets' }, */
          { value: 'usdt', label: 'USDT' },
        ]}
      />
    </TableOperations>
  )
}

export default TradeTableOperations
