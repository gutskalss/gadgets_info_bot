import { Accessor, Setter, createContext, createSignal } from 'solid-js'
import { Router, Route, Routes } from '@solidjs/router'

import { Root, GadgetDetails, Compare } from './routes'

type TRootContext = {
  selectedGadgets: Accessor<number[]>
  setSelectedGadgets: Setter<number[]>
}

export const RootContext = createContext<TRootContext>({
  selectedGadgets: () => [],
  setSelectedGadgets: () => {},
})

export const App = () => {
  const [selectedGadgets, setSelectedGadgets] = createSignal<number[]>([])

  return (
    <RootContext.Provider value={{ selectedGadgets, setSelectedGadgets }}>
      <Router>
        <Routes>
          <Route path='/' component={Root} />
          <Route path='/gadget/:id' component={GadgetDetails} />
          <Route path='/compare' component={Compare} />
        </Routes>
      </Router>
    </RootContext.Provider>
  )
}
