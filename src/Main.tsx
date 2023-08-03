/* eslint-disable import/no-duplicates */
import { type FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home, Signin, Signup } from './pages'

interface routesData {
  path: string
  element: JSX.Element
}

const routes: routesData[] = [
  { path: '/', element: <Home /> },
  { path: '/signin', element: <Signin /> },
  { path: '/signup', element: <Signup /> }
]

const Main: FC = () => {
  return (
    <div className="Main">
      <Router>
        <Routes>
          {routes.map((route, index) => (<Route path={route.path} key={index} element={route.element} />))}
        </Routes>
      </Router>
    </div>
  )
}

export default Main
