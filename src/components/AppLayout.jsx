import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import styled from 'styled-components'

const AppContainer = styled.div`
    /* z-index: -1; */

`
const MainContainer = styled.div`
    /* height: 100vh; */
     /* padding: 1rem 1.625rem; */
    
    
`


function AppLayout () {
  return (
      <>
        <AppContainer>
            <Header/>
            <MainContainer>
                <Outlet />
            </MainContainer>
        </AppContainer> 
    </>
  )
}

export default AppLayout
