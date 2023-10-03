import { ParentComponent, ComponentProps } from 'solid-js'
import { useParams } from '@solidjs/router'

import { gadgets } from '@/mock/gadgets'
import { Button } from '@/components/ui/Button/Button'
import { GadgetInfo } from '@/components/layout/GadgetInfo/GadgetInfo'

export const GadgetDetails: ParentComponent<ComponentProps<'div'>> = () => {
  const { id } = useParams()

  const selectedGadget = gadgets.find(({ gadgetId }) => gadgetId === +id)

  return (
    <div class='container'>
      <Button onClick={() => history.back()}>Back</Button>
      {selectedGadget && <GadgetInfo selectedGadget={selectedGadget} />}
      <Button onClick={() => history.back()}>Back</Button>
    </div>
  )
}
