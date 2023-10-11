import React from 'react'
import styled, { css } from 'styled-components'

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);

  /* padding: 1.2rem 0; */

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    /* border-bottom: 1px solid var(--color-grey-100); */
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.6rem;
    align-items: center;
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  position: absolute;
  display: flex;
  top: 0.5rem;
  left: 1.3rem;
  font-weight: 600;
  font-size: .8rem;
  ${props =>
    props.type === 'search' &&
    css`
    top: 0rem;
    
  `};
`

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`

const Currency = styled.div`
  display: flex;
  /* margin-right: 2.8rem; */
`

export default function FormRow ({ label, error, children }) {
  return (
    <StyledFormRow>
      <Container>
        {label &&
          <Label htmlFor={children}>
            <span>
              {label}
            </span>
          </Label>}

        <Currency>
          {children}
        </Currency>
      </Container>
    </StyledFormRow>
  )
}
