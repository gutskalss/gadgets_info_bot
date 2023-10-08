import {
  ParentComponent,
  ComponentProps,
  Show,
  onCleanup,
  onMount,
} from 'solid-js'
import { useNavigate, useParams } from '@solidjs/router'

import { gadgets } from '@/mock/gadgets'
import { GadgetsTable } from '@/components/layout'
import { tg } from '@/constants'

export const GadgetDetails: ParentComponent<ComponentProps<'div'>> = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const selectedGadget = gadgets.find(({ gadgetId }) => gadgetId === +id)

  onMount(() => {
    tg.BackButton.show()
    tg.BackButton.onClick(() => navigate('/'))
  })

  onCleanup(() => {
    tg.BackButton.hide()
  })

  return (
    <div class='container'>
      <Show
        when={selectedGadget}
        fallback={<div class='is-size-3'>Gadget not found</div>}
      >
        <GadgetsTable selectedGadgets={[selectedGadget!]} />
      </Show>
    </div>
  )
}
