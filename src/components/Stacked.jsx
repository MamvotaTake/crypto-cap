import styled, { css } from "styled-components";

const Stacked = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  text-align: right;

  ${props =>
    props.type === 'search' &&
    css`
    background-color: var(--color-grey-100);
    padding: .2rem;
    border-top-right-radius: var(--border-radius-sm);
    border-bottom-right-radius: var(--border-radius-sm);
    cursor: pointer;

    
  `} & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  & svg {
    margin-left: .7rem;
    width: 3rem;
    height: 2rem;
    color: var(--color-lime-400);
    transition: all .4s ease-in;

    &:hover {
      transform: scale(1.3) rotate(-15deg);
      color: var(--color-grey-500);
    }
  }
`

export default Stacked