import React from 'react'
import styled, { css } from 'styled-components'

const sizes = {
  small: css`
        width: 3rem;
        font-size: 0.7rem;
    `,

  medium: css`
    width: 11rem;
    font-family: "Raleway";
    padding: 1rem .4rem;
    background-color: var(--color-grey-0); 
    font-size: 1rem;
    `,

  large: css`
    width: 11.875rem;
    margin-top: .7rem;
    padding: 1rem 1.5rem;
    justify-content: center;
    `
}

const Button = styled.button`
  border: none;
  color: #fff;
  font-family: "Raleway";
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  font-style: normal;
  line-height: 1.5rem;
  border-radius: 0.625rem;
  ${props => sizes[props.size]};
  background-color: #0fae96;
  transition: all 0.3s;

 /*  ${props =>
    props.type === 'convert' &&
    css`
    border-radius: 10rem;
    background-color: var(--color-grey-100);
    padding: .5rem 1rem;
    margin: 1.5rem;
    color: var(--color-grey-800);

    & svg {
      width: 1.3rem;
      height: 1.3rem;
      color: var(--color-grey-400);
      background-color: var(--color-grey-100);
    }

    &:hover{
      background-color:var(--color-grey-0);
    }
  `}  */
  
  &:hover {
    background-color: var(--color-lime-500);
  }
  
`

Button.defaultProps = {
  size: 'large'
}

export default Button
