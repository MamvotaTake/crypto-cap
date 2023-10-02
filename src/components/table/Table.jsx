import { createContext, useContext } from 'react'
import styled from 'styled-components'

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  column-gap: 2.9rem;
  align-items: center;
  transition: none;
`

const StyledHeader = styled(CommonRow)`
    display: flex;
    padding: 1rem 2rem;
    border-radius: 0.25rem 0.25rem 0rem 0rem;
    border: 1px solid var(--wireframe-color-light-grey, #EAEAEA);
    background: var(--font-color-pure-white, #FFF);

    color: var(--wireframe-color-grey-subtitle, #808080);
    font-family: "Raleway";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    align-items: self-start;
`

const StyledBody = styled.section`
  margin: 0.4rem 0;
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
    <StyledHeader role='row' columns={columns}>
      {children}
    </StyledHeader>
  )
}

function Row ({ children, ...rest }) {
  const { columns } = useContext(TableContext)
  return (
    <StyledHeader scope='row' {...rest} columns={columns}>
      {children}
    </StyledHeader>
  )
}

function Body ({ data, render }) {
  // if (!data.length) return <Empty />
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
