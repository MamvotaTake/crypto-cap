import React from 'react'
import styled from 'styled-components'
import Row from '../Row'
import SeeMore from '../SeeMore'
import {
  HiArrowPathRoundedSquare,
  HiMiniArrowsUpDown,
  HiMiniChevronRight,
  HiOutlineExclamationCircle,
  HiQuestionMarkCircle
} from 'react-icons/hi2'
import Form from '../form/Form'
import FormRow from '../form/FormRow'
import Input from '../Input'
import Button from '../button/Button'
import Modal from '../Modal'
import NewsBanner from '../news/NewsBanner'
import CoinList from './CoinList'

const Stacked = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  text-align: right;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  padding: 3rem 2rem;
  /* background-color: red; */
`

const ConvertIcon = styled.div`
  /* width: 24rem; */
  display: flex;
  justify-content: center;

  & svg {
    width: 1.7rem;
    height: 1.7rem;
    cursor: pointer !important;
    background-color: var(--color-grey-200);
    padding: .2rem;
    border-radius: .8rem;
    transition: all .3s ease-in-out;

    &:hover {
      color: var(--color-lime-600);
      background-color: var(--color-lime-0);
    }
  }
`
const Currency = styled.span`
  display: flex;
  gap: 1.5rem;
  border-radius: 10rem;
  background-color: var(--color-grey-50);
  padding: .5rem .5rem;
  color: var(--color-grey-800);
  cursor: pointer;
  transition: all .3s ease;

  & svg {
    width: 1.3rem;
    height: 1.3rem;
    color: var(--color-grey-400);
    background-color: var(--color-grey-50);
  }

  & img {
    display: flex;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
  }

  &:hover {
    background-color: var(--color-grey-100);
  }
`

function FormConvert () {
  return (
    <Container>
      <SeeMore type='right'>
        {/* <HiOutlineExclamationCircle/> */}
        Convert Terms of Use
      </SeeMore>
      <Row>
        <Form>
          <FormRow label='Convert from'>
            <Input type='text' id='name' placeholder='0.19 - 470' />
            <Stacked>
              <Modal>
                <Modal.Open opens='convert'>
                  <Currency>
                    <img
                      src='https://static.commex.com/static/cloud/standard/static/images/admin_mgs_image_upload/20230803/8c46ad06-74a6-4cf7-8970-575e14cd4370.png'
                      alt='pic'
                    />
                    <p>FXS</p>
                    <HiMiniChevronRight />
                  </Currency>
                </Modal.Open>
                <Modal.Window name='convert'>
                  <CoinList />
                </Modal.Window>
              </Modal>
            </Stacked>
          </FormRow>
          <ConvertIcon>
            <HiArrowPathRoundedSquare />
          </ConvertIcon>
          <FormRow label='Convert to ≈'>
            <Input type='text' id='name' placeholder='0.65 - 1600' />
            <Stacked>
              <Modal>
                <Modal.Open opens='conveter'>
                  <Currency>
                    <img
                      src='https://static.commex.com/static/cloud/standard/static/images/admin_mgs_image_upload/20230803/5964e398-e3f0-4c42-87ee-1ece2dd40697.png'
                      alt='pic'
                    />
                    <p>LDO</p>
                    <HiMiniChevronRight />
                  </Currency>
                </Modal.Open>
                <Modal.Window name='conveter'>
                  <CoinList />
                </Modal.Window>
              </Modal>
            </Stacked>
          </FormRow>
          <Button>Convert</Button>
        </Form>
        <SeeMore type='right'>View Convert History</SeeMore>
      </Row>
    </Container>
  )
}

export default FormConvert
