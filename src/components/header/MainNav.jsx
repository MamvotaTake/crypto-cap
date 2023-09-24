import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../Logo'

const StyledList = styled.ul`
  display: flex;
  /* padding: 0rem 5.625rem; */
  gap: 3rem; 
`

function MainNav () {
  return (
    <nav>
      <StyledList>
        <li>
          <NavLink to='/home '>Home</NavLink>
        </li>
        <li>
          <NavLink to='/businesses'>Businesses</NavLink>
        </li>
        <li>
          <NavLink to='/trade'>Trade</NavLink>
        </li>
        <li>
          <NavLink to='/market'>Market</NavLink>
        </li>
        <li>
          <NavLink to='/learn'>Learn</NavLink>
        </li>
        <li>
          <NavLink to='/news'>News</NavLink>
        </li>
      </StyledList>
    </nav>
  )
}

export default MainNav
