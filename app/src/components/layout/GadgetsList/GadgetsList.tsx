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

type TFilters = {
  name?: string
  brands?: string
}

const filterGadgets = (filter: TFilters) =>
  gadgets.filter(({ name, brand }) => {
    const nameValid = filter.name
      ? name.toLowerCase().includes(filter.name.toLowerCase())
      : true
    const brandValid = filter.brands
      ? filter.brands.toLowerCase().includes(brand.toLowerCase())
      : true

    return nameValid && brandValid
  })

export const GadgetsList: ParentComponent<ComponentProps<'div'>> = () => {
  const [searchParams] = useSearchParams()
  const [filteredGadgets, setFilteredGadgets] = createSignal<TGadgetInfo[]>(
    filterGadgets({ name: searchParams.phone, brands: searchParams.brands })
  )

  createEffect(() => {
    setFilteredGadgets(
      filterGadgets({ name: searchParams.phone, brands: searchParams.brands })
    )
  })

  return (
    <div class={styles.root}>
      <For each={filteredGadgets()}>
        {(gadget) => <GadgetCard {...gadget} />}
      </For>
    </div>
  )
}
