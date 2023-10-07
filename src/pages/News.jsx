import React from 'react'
import NewsContainer from '../components/news/NewsContainer'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  padding: 3rem 5.625rem;
  cursor: pointer;
`
function News () {
  return (
    <Container>
      <NewsContainer />
    </Container>
  )
}

export default News
