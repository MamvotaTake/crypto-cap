import styled, { css } from 'styled-components'

const Input = styled.input`
  border: none;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 2rem 1.4rem;
  box-shadow: var(--shadow-sm);
  font-size: 1.4rem;
  transition: all .3s ease;

  ${props =>
    props.type === 'search' &&
    css`
      padding: 1.2rem 1.4rem;
      font-size: 1.8rem;

  `} outline: none;

  &::placeholder {
    color: var(--color-grey-300);
    ${props =>
      props.type === 'search' &&
      css`
      font-size: .9rem;
  `};
  }

  &:focus {
    background-color: var(--color-grey-100);
  }
`
export default Input
