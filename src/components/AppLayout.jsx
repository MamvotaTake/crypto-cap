import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import styled from 'styled-components'

const AppContainer = styled.div`
    

`
const MainContainer = styled.div`
    height: 100vh;
    /* padding: 3rem 5.625rem; */
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
