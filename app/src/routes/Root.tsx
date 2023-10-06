import { Show, useContext } from 'solid-js'

import { RootContext } from '@/App'
import { Navbar, GadgetsList, OpenCompareButton } from '@/components/layout'

export const Root = () => {
  const { selectedGadgets } = useContext(RootContext)

  return (
    <>
      <div class='container'>
        <Navbar />
        <GadgetsList />
      </div>
      <Show when={selectedGadgets().length}>
        <OpenCompareButton />
      </Show>
    </>
  )
}
