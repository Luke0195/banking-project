import React from 'react'
import { ThemeProvider } from 'styled-components'
import { light } from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import { SignIn } from '../../pages/SignIn'

export function App () {
  return (
    <>
      <ThemeProvider theme={light}>
        <SignIn/>
        <GlobalStyles/>
      </ThemeProvider>
    </>
  )
}
