import { Accessor, Setter, createContext, createSignal } from 'solid-js'
import { Router, Route, Routes } from '@solidjs/router'

import { Root, GadgetDetails, Compare } from './routes'

type TRootContext = {
  selectedGadgets: Accessor<number[]>
  setSelectedGadgets: Setter<number[]>
  isFiltersActive: Accessor<boolean>
  setIsFiltersActive: Setter<boolean>
}

export const RootContext = createContext<TRootContext>({
  selectedGadgets: () => [],
  setSelectedGadgets: () => {},
  isFiltersActive: () => false,
  setIsFiltersActive: () => {},
})

export const App = () => {
  const [selectedGadgets, setSelectedGadgets] = createSignal<number[]>([])
  const [isFiltersActive, setIsFiltersActive] = createSignal(false)

  return (
    <RootContext.Provider
      value={{
        selectedGadgets,
        setSelectedGadgets,
        isFiltersActive,
        setIsFiltersActive,
      }}
    >
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
