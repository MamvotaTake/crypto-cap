import React from 'react'
import CrytoCap from '../assets/CryptoCap.png'
import styled from 'styled-components'

const StyledLogo = styled.img`width: 8rem;`

function Logo () {
  return (
    <div>
      <StyledLogo src={CrytoCap} alt='Logo' />
    </div>
  )
}

export default Logo
