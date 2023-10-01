import React from 'react'
import {
  HiArrowDownRight,
  HiArrowRight,
  HiArrowUpRight,
  HiCheckBadge,
  HiMiniPlayCircle,
  HiMiniShieldCheck
} from 'react-icons/hi2'
import styled from 'styled-components'
import Divider from '../../components/Divider'

const Coin = styled.p`
  color: #11011e;
  font-family: "Raleway";
  font-size: 1.125rem;
  font-style: normal;
  text-transform: uppercase;
  font-weight: 600;
  line-height: normal;
`

const Currency = styled.p`
  display: flex;
  padding: 0.25rem 0.375rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  background: rgba(198, 198, 198, 0.40);
`

const StyledCoinInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.65rem;
  gap: .7rem;
`

function CoinInfo({ coin }) {
  const {image, symbol, name } = coin;
  return (
    <>
      <StyledCoinInfo>
        <img
            src={image}
            alt='icon'
        />
        <Coin>{ symbol}</Coin>
        <Currency>{name }</Currency>
        <HiArrowUpRight />
      </StyledCoinInfo>
      <Divider/>
    </>
  )
}

export default CoinInfo
