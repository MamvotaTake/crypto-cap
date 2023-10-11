import { createContext, useContext } from 'react'
import styled from 'styled-components'

const CommonRow = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  align-items: center;
  transition: none;
  padding: 1rem 1rem;
  border-radius: 0.25rem 0.25rem 0rem 0rem;
  border: 1px solid var(--wireframe-color-light-grey, #eaeaea);
  background: var(--font-color-pure-white, #fff);

  color: var(--wireframe-color-grey-subtitle, #808080);
  align-items: left;

  /* font-weight: 700; */
`

const StyledHeader = styled.div`
  padding: 1rem 1rem;
  border-radius: 0.25rem 0.25rem 0rem 0rem;
  border: 1px solid var(--wireframe-color-light-grey, #eaeaea);
  background: var(--font-color-pure-white, #ebe8e8);

  color: var(--wireframe-color-grey-subtitle, #808080);
  font-family: "Raleway";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  align-items: left;
`

const StyledBody = styled.section`
  /* display: flex; */

  /* margin: 0.4rem 0; */
  /* border: 1px solid red; */
`

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`

const TableContext = createContext()
function Table ({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      {children}
    </TableContext.Provider>
  )
}

function Header ({ children }) {
  const { columns } = useContext(TableContext)

  return (
    <StyledHeader columns={columns}>
      {children}
    </StyledHeader>
  )
}

function Row ({ children }) {
  const { columns } = useContext(TableContext)
  return (
    <CommonRow scope='row' columns={columns}>
      {children}
    </CommonRow>
  )
}

function Body ({ data, render }) {
  if (!data.length) return <Empty />
  return (
    <StyledBody>
      {data.map(render)}
    </StyledBody>
  )
}

Table.Header = Header
Table.Body = Body
Table.Row = Row
Table.Footer = Footer

export default Table
