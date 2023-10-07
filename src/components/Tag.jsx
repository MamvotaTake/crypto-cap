import styled from 'styled-components'

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 0.6rem;
  font-weight: 400;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${props => props.type}-700);
  background-color: var(--color-${props => props.type}-100);
  transition: all .5s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--color-${props => props.type}-300);
  }
`

export default Tag
