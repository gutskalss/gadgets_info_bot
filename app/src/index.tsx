/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route, Routes } from '@solidjs/router'
import 'bulma'

import { Root } from './routes/Root'
import { GadgetDetails } from './routes/GadgetDetails'

import './index.scss'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
  )
}

render(
  () => (
    <Router>
      <Routes>
        <Route path='/' component={Root} />
        <Route path='/gadget/:id' component={GadgetDetails} />
      </Routes>
    </Router>
  ),
  root!
)
