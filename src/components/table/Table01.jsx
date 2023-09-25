import { createContext, useContext } from 'react'
import styled from 'styled-components'

// const StyledTable = styled.table`

// `

const StyledHead = styled.th`
  display: flex;
  height: 3.89844rem;
  padding: 1rem 4.625rem 1rem 1.875rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 0.25rem 0.25rem 0rem 0rem;
  border: 1px solid var(--wireframe-color-light-grey, #eaeaea);
  background: var(--font-color-pure-white, #fff);
`

const StyledBody = styled.tbody``

const StyledRow = styled.tr``

const StyledDetail = styled.td``

// const Footer = styled.tfoot`background: var(--font-color-pure-white, #fff);`

const TableContext = createContext()
export default function Table ({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      {children}
    </TableContext.Provider>
  )
}

function Head ({ children }) {
  const { columns } = useContext(TableContext)
  return (
    <StyledHead scope='row' columns={columns}>
      {children}
    </StyledHead>
  )
}

function Body({ data, render }) {
    if (!data.length) return null;
  return (
    <StyledBody scope='row'>
      {data.map(render)}
    </StyledBody>
  )
}

function Row ({ children }) {
  const { columns } = useContext(TableContext)
  return (
    <StyledRow scope='row' columns={columns}>
      {children}
    </StyledRow>
  )
}

function Detail ({ children, ...rest }) {
  return (
    <StyledDetail {...rest} scope='row'>
      {children}
    </StyledDetail>
  )
}

Table.Head = Head
Table.Body = Body
Table.Row = Row
Table.Detail = Detail
// Table.Footer = Footer
