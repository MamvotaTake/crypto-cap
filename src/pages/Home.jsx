import styled from 'styled-components'
import React from 'react'
import {
  HiArrowRight,
  HiCheckBadge,
  HiMiniPlayCircle,
  HiMiniShieldCheck
} from 'react-icons/hi2'
import { FaBitcoin } from 'react-icons/fa'
import bgAbove from '../assets/bg-above.png'
import bgFeatures from '../assets/bg-features.png'
import Button from '../components/button/Button'
import Row from '../components/Row'
import Card from '../components/cards/Card'
import Heading from '../components/Heading'
import ButtonIcon from '../components/button/ButtonIcon'
import CryptoTableOperations from '../components/CryptoTableOperations'
import CoinTable from '../components/CoinTable'
import Trends from '../components/Trends'
import GetStarted from '../components/getStarted/GetStarted'

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  /* background-image: url(${bgAbove}); */
  /* background-color: #000a09;
  filter: blur(1); */
  gap: 2.5rem;
`

const HeroSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${bgAbove});
  gap: 4.2rem;
  padding: 1.2rem;
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  gap: 2.5rem;
  margin-top: 8rem;
`

const Paragraph = styled.p`
  display: flex;
  width: 32rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: var(--font-color-subtitle-color, #4d625f);
  text-align: center;
`

const StyledFeature = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bgFeatures});
  padding: 3rem 5.625rem;
`

const FeaturedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.5rem;
`

const SeeMoreLink = styled.p`
  color: var(--high-fidelity-color-primary-color, #0fae96);
  display: flex;
  gap: 0.3rem;
  margin-top: 1.5rem;

  /* Label/Label 1 - Medium */
  font-family: "Raleway";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
`

const LearnContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1.25rem 3.75rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.75rem;
  border: 1px solid var(--wireframe-color-light-grey, #eaeaea);
  margin: 0 auto;
  margin-top: 7rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
`

const CryptoCategoryContainer = styled.div`
  padding: 3rem 5.625rem;

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`

function Home () {
  return (
    <StyledHome>
      <HeroSection>
        <HeroContent>
          <Heading as='h1'>Crypto Exchange</Heading>
          <Heading as='h4'>
            easy buying and selling of bitcoin and other cryptocurrencies
          </Heading>
          <Button>Get started</Button>
        </HeroContent>

        <Row>
          <Trends />
        </Row>
      </HeroSection>
      <StyledFeature>
        <FeaturedContent>
          <Heading as='h1'>CryptoCap Amazing Features</Heading>
          <Paragraph>
            Explore sensational features to prepare your best investment in
            cryptocurrency
          </Paragraph>
        </FeaturedContent>
        <FeaturesContainer>
          <Row type='horizontal'>
            <Card>
              <ButtonIcon>
                <HiCheckBadge />
              </ButtonIcon>
              <Heading as='h3'>Manage Portfolio</Heading>
              <p>
                Buy and sell popular digital currencies, keep track of them in
                the one place.
              </p>
              <SeeMoreLink>
                see more
                <span>
                  <HiArrowRight />
                </span>
              </SeeMoreLink>
            </Card>
            <Card>
              <ButtonIcon>
                <HiMiniShieldCheck />
              </ButtonIcon>
              <Heading as='h3'>Protected Securely</Heading>
              <p>
                All cash balances are covered by FDIC insurance, up to a maximum
                of $250,000.
              </p>
              <SeeMoreLink>
                see more
                <span>
                  <HiArrowRight />
                </span>
              </SeeMoreLink>
            </Card>
            <Card>
              <ButtonIcon>
                <FaBitcoin />
              </ButtonIcon>
              <Heading as='h3'>Cryptocurrency Variety</Heading>
              <p>
                Supports a variety of the most popular digital currencies and
                always uptodate.
              </p>
              <SeeMoreLink>
                see more
                <span>
                  <HiArrowRight />
                </span>
              </SeeMoreLink>
            </Card>
            <Card>
              <ButtonIcon>
                <HiMiniPlayCircle />
              </ButtonIcon>
              <Heading as='h3'>Learn Best Practice</Heading>
              <p>
                Easy to know how to cryptocurrency works and friendly to newbie.
              </p>
              <SeeMoreLink>
                see more
                <span>
                  <HiArrowRight />
                </span>
              </SeeMoreLink>
            </Card>
          </Row>
        </FeaturesContainer>

        <LearnContainer>
          <div>
            <Heading>New In Cryptocurrency?</Heading>
            <p>
              We&apos;ll tell you what cryptocurrencies are, how they work and
              why you should own one right now. So let&apos;s do it.
            </p>
          </div>
          <Button size='medium'>Learn & Explore Now</Button>
        </LearnContainer>
      </StyledFeature>
      <CryptoCategoryContainer>
        <Heading>Market Update</Heading>
        <p>Cryptocurrency Categories</p>
        <div>
          <CryptoTableOperations />
        </div>
        <CoinTable />
        <br />
      </CryptoCategoryContainer>

      <GetStarted />
      
    </StyledHome>
  )
}

export default Home
