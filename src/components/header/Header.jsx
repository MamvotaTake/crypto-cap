import React from 'react'
import MainNav from './MainNav'
import Logo from '../Logo'
import styled from 'styled-components'
import bgAbove from '../../assets/bg-above.png'
import BurgerMenu from './BurgerMenu'

const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 0rem 5.625rem;
  height: 5.625rem;
  gap: 3rem;
  /* justify-content: space-between; */
  border-bottom: 1px solid var(--wireframe-color-light-grey, #eaeaea);
  box-shadow: 0px 1px 1px 0px rgba(223, 221, 221, 0.75);
  overflow: hidden;
  background-color: #f0f7f6;
  z-index: 1;

  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    z-index: 10000;
  } */
`

function Header () {
  return (
    <StyledHeader>
      <Logo />
      <MainNav />
    </StyledHeader>
  )
}

export default Header
