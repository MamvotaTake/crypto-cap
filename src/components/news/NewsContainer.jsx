import React from 'react'
import styled from 'styled-components'
import NewsBanner from './NewsBanner'
import Card from '../cards/Card'
import Thumbnail from '../../assets/Thumbnail.png'
import crypto from '../../assets/crypto.png'
import bitcoin from '../../assets/bitcoin.png'
import money from '../../assets/money.png'
import Tag from '../Tag'
import Footer from '../footer/Footer'
import SeeMore from '../SeeMore'
import NewsContent from './NewsContent'

const StyledNewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 8rem;
  
`


const StyledNews = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(10rem, auto);
  gap: 1rem;
  /* z-index: -1; */
  
`

const Container = styled(StyledNews)`
  
`
function NewsContainer () {
  return (
      <>
        <StyledNewsContainer>
            <Container>
                <NewsBanner />
                <NewsContent image={crypto} type="red" status="Tips & Tricks"/>    
                <NewsContent image={bitcoin} type="grey" status="Crypto Advanced"/>    
            </Container>
            <StyledNews>
                <NewsContent image={bitcoin} type="lime" status="Bitcoin"/>
                <NewsContent image={crypto} type="red" status="Crypto"/>
                <NewsContent image={money} type="lime" status="Money" />
                <NewsContent image={bitcoin} type="lime" status="Bitcoin"/>
            </StyledNews>
        
            <SeeMore>See All Articles</SeeMore>
            <Footer/>
        </StyledNewsContainer>
      </>
  )
}

export default NewsContainer
