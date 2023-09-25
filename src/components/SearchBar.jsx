import React from 'react'
import { HiAcademicCap, HiOutlineMagnifyingGlassCircle, HiServer } from 'react-icons/hi2'
import styled, { css } from 'styled-components'

const BarStyle = styled.input`
  width: 10.625rem;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
  transition: all .6s;
  outline: none;
  font-family: "Raleway";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;

  &::placeholder {
    color: var(--wireframe-color-grey-subtitle, #808080);

    /* Caption/Caption 1 - Reguler */
    font-family: "Raleway";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
  }

  &:focus {
    width: 17.625rem;
    background-color: var(--color-lime-0);
    color: var(--color-grey-900);
    font-weight: 500;
  }
`

const Container = styled.div`
position: relative;
    
    & svg{
        position: absolute;
        top: 20%;
        left: 5%;
        width: 1.5rem;
        height: 1.5rem;
    }
`

function SearchBar ({ keyword, onChange }) {
    return (
    <>
        
            <Container>
                {/* <span><HiOutlineMagnifyingGlassCircle/></span> */}
                <BarStyle
        key='search-bar'
        value={keyword}
        onChange={() => onChange(e.target.value)}
        placeholder='Search Coin'
            />
        </Container>
    </>
  )
}

export default SearchBar
