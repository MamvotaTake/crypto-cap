import React from 'react'
import styled, { css } from 'styled-components'

const sizes = {
  small: css`
        
    `,

  medium: css`
    font-family: "Raleway";
    padding: 1rem 1.5rem;
    font-size: 1rem;
    `,

  large: css`
    width: 11.875rem;
    padding: 1rem 1.5rem;
    justify-content: center;
    `
}

const Button = styled.button`
  border: none;
  color: #fff;
  font-family: "Raleway";
  font-size: 1rem;
  font-weight: 600;
  font-style: normal;
  line-height: 1.5rem;
  border-radius: 0.625rem;
  ${props => sizes[props.size]};
  background-color: #0fae96;
`

Button.defaultProps = {
  size: 'large'
}

export default Button
