import Home from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'
import AppRoutes from './config/AppRoutes'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Businesses from './pages/Businesses'
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
              <Route path='businesses' element={<Businesses />} />
              <Route path='trade' element={<Trade />} />
              <Route path='market' element={<Market />} />
              <Route path='Learn' element={<Learn />} />
              <Route path='news' element={<News/>} />
            </Route>
          </Routes>
          
        </BrowserRouter>
      </>
    </ThemeProvider>
  )
}

export default App
