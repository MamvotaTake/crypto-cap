import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Businesses from '../pages/Convert'
import Home from '../pages/Home'
import Learn from '../pages/Learn'
import Market from '../pages/Market'
import News from '../pages/News'
import Trade from '../pages/Trade'

const routes = [
  {
    path: 'home',
    element: <Home />,
    index: true
  },
  {
    path: 'businesses',
    element: <Businesses />
  },
  {
    path: 'trade',
    element: <Trade />
  },
  {
    path: 'market',
    element: <Market />
  },
  {
    path: 'learn',
    element: <Learn />
  },
  {
    path: 'news',
    element: <News />
  }
]

function AppRoutes () {
  return (
    <Routes>
      {routes.map((route, i) =>
        <Route
          key={i}
          path={route.path}
          element={route.element}
          // index={route.index}
        />
      )}
    </Routes>
  )
}

export default AppRoutes
