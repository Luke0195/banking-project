import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import { SignIn, Dashboard } from '../pages'

function Routes () {
  return (
    <Switch>
        <Route path="/" element={<SignIn/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
    </Switch>

  )
}

export default Routes
