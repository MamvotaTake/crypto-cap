import { motion } from 'framer-motion'
import styled from 'styled-components'

const Card = styled(motion.div)`
  flex: 1 0 0;
  padding: 1.125rem 1.25rem 1.125rem 1.1875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 1.0625rem; */
  align-self: stretch;
  margin-bottom: 1.2rem;
  flex: 1 1 0;

  border-radius: 1.125rem;
  border: 1px solid var(--wireframe-color-light-grey, #eaeaea);
  background: var(--font-color-pure-white, #fff);
  box-shadow: -1px 2px 5px 0px rgba(223, 221, 221, 0.75);
  cursor: pointer;

  img {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
  }

  & svg {
    width: 1.4rem;
    height: 1.4rem;
    flex-shrink: 0;
    padding: 0.1rem;
    border-radius: 0.3rem;
    background: var(--color-grey-100);
  }
`

export default Card
