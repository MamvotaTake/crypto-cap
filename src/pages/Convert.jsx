import React from 'react'
import styled from 'styled-components'
import Heading from '../components/Heading'
import {
  HiCurrencyDollar,
  HiMiniPaperClip,
  HiOutlineCurrencyDollar,
  HiOutlineLink,
  HiOutlinePaperAirplane
} from 'react-icons/hi2'
import Footer from '../components/footer/Footer'
import FormConvert from '../components/convert/FormConvert'

const StyledConvert = styled.div`
  display: flex;
  flex-direction: column;
  `

const Container = styled.div`
width: 100%;
  margin-top: 5.7rem;
  padding: 1.5rem 9rem 2rem;
  background-color: var(--color-lime-0);
`

const Content = styled.div`
  display: flex;
  gap: 2rem;

  div {
    display: flex;
    gap: .6rem;
    justify-content: center;
    align-items: center;

    & svg {
      display: flex;
      color: var(--color-lime-600);
    }
  }
`
function Convert () {
  return (
    <>
      <StyledConvert>
      <Container>
        <Heading as='h3'>Convert</Heading>
        <Content>
          <div>
            <HiOutlineCurrencyDollar />
            <span>0 fee</span>
          </div>
          <div>
            <HiOutlineLink />
            <span>Thousands of Pairs</span>
          </div>
          <div>
            <HiOutlinePaperAirplane />
            <span>Fast Transactions</span>
          </div>
        </Content>
        </Container>
        <FormConvert/>
      </StyledConvert>
      <Footer/>
    </>
  )
}

export default Convert
