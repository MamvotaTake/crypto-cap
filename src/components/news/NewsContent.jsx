import React from 'react'
import styled from 'styled-components'
import Tag from '../Tag'

const StyledNewsContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
  border-radius: 1.125rem;
  border: 1px solid var(--wireframe-color-light-grey, #eaeaea);
  background: var(--font-color-pure-white, #fff);
  box-shadow: -1px 2px 5px 0px rgba(223, 221, 221, 0.75);
  cursor: pointer;
`

const Content = styled.div`
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  /* align-self: stretch; */
`

const NewsImage = styled.img`
  position: relative;
  display: flex;
`

function NewsContent ({ image, type, status }) {
  return (
    <StyledNewsContent>
      <NewsImage src={image} alt='' />
      <Content>
        <Tag type={type}>
          {status}
        </Tag>
        <h5>What is cryptocurrency? all you need to know</h5>
        <p>
          Cryptocurrencies are basically digital assets. It is secured by
          cryptography..
        </p>
      </Content>
    </StyledNewsContent>
  )
}

export default NewsContent
