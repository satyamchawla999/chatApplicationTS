import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux/es/exports'

import { store } from './app/store'
import Main from './Main'

import './assets/styles/index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
)
