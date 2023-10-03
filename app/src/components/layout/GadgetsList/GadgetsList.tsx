import { ParentComponent, ComponentProps } from 'solid-js'

import { GadgetCard } from '@/components/ui/GadgetCard/GadgetCard'
import { gadgets } from '@/mock/gadgets'

import styles from './GadgetsList.module.scss'

export const GadgetsList: ParentComponent<ComponentProps<'div'>> = () => {
  return (
    <div class={styles.root}>
      {gadgets.map((gadget) => (
        <GadgetCard {...gadget} />
      ))}
    </div>
  )
}
