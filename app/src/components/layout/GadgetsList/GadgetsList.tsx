import { ParentComponent, ComponentProps } from 'solid-js'
import { GadgetCard } from '@/components/ui/GadgetCard/GadgetCard'
import styles from './GadgetsList.module.scss'

export const GadgetsList: ParentComponent<ComponentProps<'div'>> = () => {
  return (
    <div class={styles.root}>
      <GadgetCard />
      <GadgetCard />
      <GadgetCard />
      <GadgetCard />
      <GadgetCard />
    </div>
  )
}
