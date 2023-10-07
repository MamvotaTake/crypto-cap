import styled from 'styled-components'

const SeeMore = styled.p`
  color: var(--high-fidelity-color-primary-color, #0fae96);
  font-family: Raleway;
  font-size: 1rem;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    color: var(--color-lime-100);
  }
`
export default SeeMore
