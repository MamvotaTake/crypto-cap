import React from 'react'
import Heading from '../../components/Heading'
import FormRow from '../../components/form/FormRow'
import Input from '../../components/Input'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import Stacked from '../../components/Stacked'
import styled from 'styled-components'

const CoinListHeader = styled.header`
  /* border-bottom: 1px solid var(--wireframe-color-light-grey, #eaeaea); */
  box-shadow: 0px 1px 1px 0px rgba(223, 221, 221, 0.75);
  overflow: hidden;
  margin-bottom: 1rem;
  /* background-color: #f0f7f6; */
`

function CoinHeader ({ header }) {
  return (
    <CoinListHeader>
      <Heading as='h1'>
        {header}
      </Heading>
      <FormRow label='Search' type='search'>
        <Input type='search' id='name' placeholder='Bitcoin' />
        <Stacked type='search'>
          <HiOutlineMagnifyingGlass />
        </Stacked>
      </FormRow>
    </CoinListHeader>
  )
}

export default CoinHeader
