import React from 'react'
import styled from 'styled-components'
import MarketContainer from '../components/market/MarketContainer'
import Footer from '../components/footer/Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 5.625rem;
  cursor: pointer;
`
function Market () {
    return <Container>
        <MarketContainer></MarketContainer>
        <Footer/>
  </Container>
}

export default Market
