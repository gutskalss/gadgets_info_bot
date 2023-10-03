import { Component } from 'solid-js'
import { Router, Route, Routes } from '@solidjs/router'

import { Root } from './routes/Root'
import { GadgetDetails } from './routes/GadgetDetails'

export const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' component={Root} />
        <Route path='/gadget/:id' component={GadgetDetails} />
      </Routes>
    </Router>
  )
}
