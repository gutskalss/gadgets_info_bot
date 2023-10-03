import { ParentComponent, ComponentProps } from 'solid-js'

import {
  GadgetCard,
  TGadgetCardProps,
} from '@/components/ui/GadgetCard/GadgetCard'

import styles from './GadgetsList.module.scss'

const gadgets: TGadgetCardProps[] = [
  {
    gadgetId: 1,
    name: 'Apple iPhone 15 Pro Max',
    imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg',
  },
  {
    gadgetId: 2,
    name: 'Apple iPhone 15 Pro',
    imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg',
  },
  {
    gadgetId: 3,
    name: 'Apple iPhone 15 Plus',
    imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-plus-.jpg',
  },
  {
    gadgetId: 4,
    name: 'Apple iPhone 15',
    imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg',
  },
  {
    gadgetId: 5,
    name: 'Apple iPhone 14 Pro Max',
    imageUrl:
      'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg',
  },
  {
    gadgetId: 6,
    name: 'Apple iPhone 14 Pro',
    imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg',
  },
]

export const GadgetsList: ParentComponent<ComponentProps<'div'>> = () => {
  return (
    <div class={styles.root}>
      {gadgets.map((gadget) => (
        <GadgetCard {...gadget} />
      ))}
    </div>
  )
}
