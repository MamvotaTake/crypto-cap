import React from 'react'
import TableOperations from './table/TableOperations'
import Filter from './Filter'

function CryptoTableOperations () {
  return (
    <TableOperations>
      <Filter
        filterField='filterBy'
        options={[
          { value: 'popular', label: 'Popular' },
          { value: 'metaverse', label: 'Metaverse' },
          { value: 'entertainment', label: 'Entertainment' },
          { value: 'energy', label: 'Energy' },
          { value: 'gaming', label: 'Gaming' },
          { value: 'music', label: 'Music' },
          { value: 'see-all', label: 'See all 12+' }
        ]}
      />
    </TableOperations>
  )
}

export default CryptoTableOperations
