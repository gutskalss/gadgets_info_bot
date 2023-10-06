import {
  ParentComponent,
  ComponentProps,
  createEffect,
  createSignal,
  For,
} from 'solid-js'
import { useSearchParams } from '@solidjs/router'

import { GadgetCard } from '@/components/layout'
import { gadgets } from '@/mock/gadgets'

import styles from './GadgetsList.module.scss'
import { TGadgetInfo } from '@/types/gadgetInfo'

const filterGadgets = (filter?: string) =>
  filter
    ? gadgets.filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase())
      })
    : gadgets

export const GadgetsList: ParentComponent<ComponentProps<'div'>> = () => {
  const [searchParams] = useSearchParams()
  const [filteredGadgets, setFilteredGadgets] = createSignal<TGadgetInfo[]>(
    filterGadgets(searchParams.phone)
  )

  createEffect(() => {
    setFilteredGadgets(filterGadgets(searchParams.phone))
  })

  return (
    <div class={styles.root}>
      <For each={filteredGadgets()}>
        {(gadget) => <GadgetCard {...gadget} />}
      </For>
    </div>
  )
}
