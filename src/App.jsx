import Home from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'
import AppRoutes from './config/AppRoutes'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Convert from './pages/Convert'
import Trade from './pages/Trade'
import Market from './pages/Market'
import Learn from './pages/Learn'
import News from './pages/News'
import { ThemeProvider } from 'styled-components'

const theme = {
  mobile: '768px',
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path='home' element={<Home />} />
              <Route path='convert' element={<Convert />} />
              {/* <Route path='trade' element={<Trade />} /> */}
              <Route path='markets' element={<Market />} />
              {/* <Route path='Learn' element={<Learn />} /> */}
              <Route path='news' element={<News/>} />
            </Route>
          </Routes>
          
        </BrowserRouter>
      </>
    </ThemeProvider>
  )
}

export default App
