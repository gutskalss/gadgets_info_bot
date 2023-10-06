import { Show, useContext } from 'solid-js'

import { RootContext } from '@/App'
import { GadgetsTable, ToMain } from '@/components/layout'
import { gadgets } from '@/mock/gadgets'

export const Compare = () => {
  const { selectedGadgets } = useContext(RootContext)

  const selectedGadgetsData = gadgets.filter(({ gadgetId }) =>
    selectedGadgets().includes(gadgetId)
  )

  return (
    <>
      <div class='container'>
        <Show
          when={selectedGadgetsData.length}
          fallback={<div class='is-size-3'>No gadgets selected</div>}
        >
          <GadgetsTable selectedGadgets={selectedGadgetsData} />
        </Show>
      </div>
      <ToMain />
    </>
  )
}
