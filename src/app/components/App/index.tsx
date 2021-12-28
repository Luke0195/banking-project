import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { light } from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import Routes from '../../routes'
export function App () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <Routes/>
        <GlobalStyles/>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnFocusLoss

            />
      </ThemeProvider>
    </BrowserRouter>
  )
}
