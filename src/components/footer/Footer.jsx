import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import footerBg from '../../assets/footer.png'
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from 'react-icons/ci'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3rem 5.625rem;
  gap: 2rem;
  /* background: rgba(255, 255, 255, 0.05); */
  background-image: url(${footerBg});
  background-repeat: no-repeat;
  background-position: center 50px;
  border-top: 1px solid var(--color-grey-100);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 0 5rem 0 0rem;
  }
`

const Copyright = styled.p`
  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    justify-content: center;
  } */
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

  p {
    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: none;
    }
  }
`

const SocialMediaLinks = styled.ul`
  display: flex;
  gap: 2rem;

  & svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`

const LinkCointainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;

  p {
    font-size: 1.2rem !important;
    font-weight: 500;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    cursor: pointer;
  }

  li {
    transition: color 0.3s ease;
    &:hover {
      color: var(--color-lime-100);
    }
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
        <LinkCointainer>
          <p>About Us</p>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Legal & privacy</li>
          </ul>
        </LinkCointainer>
        <LinkCointainer>
          <p>Services</p>
          <ul>
            <li>Aplications</li>
            <li>Buy Crypto</li>
            <li>Affilliate</li>
            <li>Institutional Services</li>
          </ul>
        </LinkCointainer>
        <LinkCointainer>
          <p>Learn</p>
          <ul>
            <li>What is Cryptocurency?</li>
            <li>Crypto Basic</li>
            <li>Tips and Tutorials</li>
            <li>Market Update</li>
          </ul>
        </LinkCointainer>
      </StyledLinks>
    </StyledFooter>
  )
}

export default Footer
