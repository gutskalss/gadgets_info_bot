import { ParentComponent, ComponentProps } from 'solid-js'
import { useParams } from '@solidjs/router'

export const GadgetDetails: ParentComponent<ComponentProps<'div'>> = () => {
  const { id } = useParams()

  return <div>Gadget: {id}</div>
}
