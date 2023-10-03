import type { Component } from 'solid-js'

import { Navbar } from './components/layout/Navbar/Navbar'
import { GadgetsList } from './components/layout/GadgetsList/GadgetsList'

export const App: Component = () => {
  return (
    <div class='container'>
      <Navbar />
      <GadgetsList />
    </div>
  )
}
