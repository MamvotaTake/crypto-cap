import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 98%;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  transition: all .4s ease-in;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-50);
  }
`

const CoinImage = styled.img`
  width: 2.6rem;
  height: 2.6rem;
`

const CoinContent = styled.div`
  & p {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;

    & span {
      font-size: 1rem;
      font-size: .8rem;
      font-weight: 100;
    }
  }
`

function Coin ({ coin }) {
  console.log(coin)
  const { image, symbol, name } = coin
  return (
    <Container>
      <CoinImage src={image} alt={name} />
      <CoinContent>
        <p>
          {symbol} <span>{name}</span>
        </p>
      </CoinContent>
    </Container>
  )
}

export default Coin
