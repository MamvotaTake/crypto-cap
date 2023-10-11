import styled, { css } from 'styled-components'

const SeeMore = styled.p`
  display: flex;
  color: var(--high-fidelity-color-primary-color, #0fae96);
  font-family: Raleway;
  font-size: 1rem;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
  transition: all .3s ease;

  ${props => props.type === 'right' && css`
    justify-content: flex-end;
  `},

  ${props => props.type === 'center' && css`
    justify-content: center;
    align-items: center;
  `}

  &:hover {
    color: var(--color-lime-100);
  }

  & svg{
    width: 1.4rem;
    height: 1.5rem;
    display: flex;
    margin-right: .1rem;
  }
`
export default SeeMore
