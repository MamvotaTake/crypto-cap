import React from 'react'
import styled from 'styled-components'
import bgGetStarted from '../../assets/bg-get-started.png'
import Heading from '../Heading'
import Button from '../button/Button'
import Card from '../cards/Card'
import { HiCheckBadge, HiMiniCreditCard, HiUserPlus } from 'react-icons/hi2'
import ButtonIcon from '../button/ButtonIcon'
import NewsBanner from '../news/NewsBanner'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
  display: flex;
  padding: 3rem 5.625rem;
  justify-content: space-between;
  background-image: url(${bgGetStarted});
  
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Step = styled(motion.div)`
  display: flex;
  padding: 0.625rem 3.25rem 1.25rem 1.25rem;
  align-items: center;
  gap: 1.3125rem;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 1.125rem;
  border: 1px solid var(--wireframe-color-light-grey, #eaeaea);
  background: var(--font-color-pure-white, #fff);

  & svg {
    width: 2rem;
    height: 2rem;
    display: flex;
    color: var(--color-lime-600);
    background-color: var(--color-lime-50);
    padding: 0.3rem;
    align-items: center;
    text-align: center;
    border-radius: 50%;
  }
`
const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`
function GetStarted () {
  return (
    <>
      <Container
        initial={{ opacity: 0, translateY: '150px' }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, scale: 1, translateY: '0px' }}>
      <Content>
        <Heading as='h2'>How To Get Started</Heading>
        <p>Simple and easy way to start your investment in cryptocurrency</p>
        <Button>Get Started</Button>
      </Content>
      <StepsContainer>
          <Step
            initial={{ opacity: 0, translateX: '90px' }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}>
          <HiUserPlus />
          <div>
            <h4>Create Your Account</h4>
            <p>Your account and personal identity are guaranteed safe.</p>
          </div>
        </Step>
          <Step
            initial={{ opacity: 0, translateX: '-90px' }}
            transition={{ duration: 2.2 }}
            whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}>
          <HiMiniCreditCard />
          <div>
            <h4>Connect Bank Account</h4>
            <p>Connect the bank account to start transactions.</p>
          </div>
        </Step>
          <Step
            initial={{ opacity: 0, translateX: '90px' }}
            transition={{ duration: 2.4 }}
            whileInView={{ opacity: 1, scale: 1, translateX: '0px' }}>
          <HiCheckBadge />
          <div>
            <h4>Start Build Portfolio</h4>
            <p>Buy and sell popular currencies and keep track of them.</p>
          </div>
        </Step>
      </StepsContainer>
      
    </Container>
      {/* <NewsBanner/> */}
    </>
  )
}

export default GetStarted
