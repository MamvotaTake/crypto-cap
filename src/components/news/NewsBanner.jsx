import React from 'react'
import styled from 'styled-components'
import newsBanner from '../../assets/newsBanner.png'
import Tag from '../Tag'
import Button from '../button/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  background-image: url(${newsBanner});
  padding: 2rem 2.625rem;
  border-radius: var(--border-radius-lg);
  z-index: -1;
  grid-column: 1 / 3;
  grid-row: 1;

  h1 {
    color: var(--color-grey-0);
  }
`

const TagContainer = styled.div`
  display: flex;
  gap: .7rem;
`
function NewsBanner () {
  return (
    <Container>
      <TagContainer>
        <Tag type='green'>Crypto Basic</Tag>
        <Tag type='red'>Tips & Tricks</Tag>
        <Tag type='lime'>Bitcoin</Tag>
        <Tag type='grey'>Crytpo Advantanced</Tag>
      </TagContainer>
      <h1>
        FTX Lawyers Sullivan & Cromwell Bill $7.5M for First 19 Day &apos;s
        Bankruptcy Work
      </h1>
      <Button size='medium'>More</Button>
    </Container>
  )
}

export default NewsBanner
