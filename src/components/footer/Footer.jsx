import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from 'react-icons/ci'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3rem 5.625rem;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-top: 1px solid var(--color-grey-100);
`
const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10rem;
`

const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

const SocialMediaLinks = styled.ul`
  display: flex;
  gap: 2rem;

  & svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`

function Footer () {
  return (
    <StyledFooter>
      <SocialMedia>
        <Logo />
        <SocialMediaLinks>
          <li>
            <CiFacebook />
          </li>
          <li>
            <CiInstagram />
          </li>
          <li>
            <CiTwitter />
          </li>
          <li>
            <CiYoutube />
          </li>
        </SocialMediaLinks>
        <p>2023 CoinMarketCap. All rights reserved</p>
      </SocialMedia>
      <StyledLinks>
        <div>
          <p>About Us</p>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Legal & privacy</li>
          </ul>
        </div>
        <div>
          <p>Services</p>
          <ul>
            <li>Aplications</li>
            <li>Buy Crypto</li>
            <li>Affilliate</li>
            <li>Institutional Services</li>
          </ul>
        </div>
        <div>
          <p>Learn</p>
          <ul>
            <li>What is Cryptocurency?</li>
            <li>Crypto Basic</li>
            <li>Tips and Tutorials</li>
            <li>Market Update</li>
          </ul>
        </div>
      </StyledLinks>
    </StyledFooter>
  )
}

export default Footer
