import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers
} from 'react-icons/hi2'
import styled from 'styled-components'
import Logo from '../Logo'

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  
`

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-lime-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`

function MainNav () {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to='/home '>Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/businesses'>Businesses</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/trade'>Trade</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/market'>Market</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/learn'>Learn</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/news'>News</StyledNavLink>
        </li>
      </NavList>
    </nav>
  )
}

export default MainNav
