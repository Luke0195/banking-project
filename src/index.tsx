import React from 'react'
import ReactDOM from 'react-dom'
import { AppProvider } from './app/hooks/UserContext'
import { App } from './app/components'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
