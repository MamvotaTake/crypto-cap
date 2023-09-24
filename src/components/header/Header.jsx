import React from 'react'
import MainNav from './MainNav'
import Logo from '../Logo'
import styled from 'styled-components'
import bgAbove from '../../assets/bg-above.png'

const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 0rem 5.625rem;
  height: 5.625rem;
  justify-content: space-between;
  border-bottom: 1px solid var(--wireframe-color-light-grey, #eaeaea);
  box-shadow: 0px 1px 1px 0px rgba(223, 221, 221, 0.75);
  overflow: hidden;

  /* background-image: url(${bgAbove}); */
  background-color: #bde4df;
  /* filter: blur(1); */
  /* color: white; */
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
