import styled from 'styled-components'

const ButtonIcon = styled.button`
  background: #b7e7e0;
  border: none;
  padding: 0.6rem;
  border-radius: 50%;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #b7e7e0;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: #0fae96;
    background: none;
  }
`

export default ButtonIcon
