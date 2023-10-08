import { Show, onCleanup, useContext } from 'solid-js'
import { useNavigate } from '@solidjs/router'

import { RootContext } from '@/App'
import { GadgetsTable } from '@/components/layout'
import { gadgets } from '@/mock/gadgets'
import { tg } from '@/constants'

export const Compare = () => {
  const { selectedGadgets } = useContext(RootContext)
  const navigate = useNavigate()

  const selectedGadgetsData = gadgets.filter(({ gadgetId }) =>
    selectedGadgets().includes(gadgetId)
  )

  tg.BackButton.show()
  tg.BackButton.onClick(() => navigate('/'))

  onCleanup(tg.BackButton.hide)

  return (
    <div class='container'>
      <Show
        when={selectedGadgetsData.length}
        fallback={<div class='is-size-3'>No gadgets selected</div>}
      >
        <GadgetsTable selectedGadgets={selectedGadgetsData} />
      </Show>
    </div>
  )
}
