import { ParentComponent, ComponentProps, Show } from 'solid-js'
import { useParams } from '@solidjs/router'

import { gadgets } from '@/mock/gadgets'
import { GadgetsTable, ToMain } from '@/components/layout'

export const GadgetDetails: ParentComponent<ComponentProps<'div'>> = () => {
  const { id } = useParams()

  const selectedGadget = gadgets.find(({ gadgetId }) => gadgetId === +id)

  return (
    <>
      <div class='container'>
        <Show
          when={selectedGadget}
          fallback={<div class='is-size-3'>Gadget not found</div>}
        >
          <GadgetsTable selectedGadgets={[selectedGadget!]} />
        </Show>
      </div>
      <ToMain />
    </>
  )
}
