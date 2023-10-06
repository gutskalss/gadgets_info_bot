import { Accessor, Setter, createContext, createSignal } from 'solid-js'
import { Router, Route, Routes } from '@solidjs/router'

import { Root } from './routes/Root'
import { GadgetDetails } from './routes/GadgetDetails'

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
        </Routes>
      </Router>
    </RootContext.Provider>
  )
}
