import { ParentComponent, ComponentProps } from 'solid-js'
import cn from 'classnames'

import { Button } from '@/components/ui/Button/Button'

import styles from './GadgetCard.module.scss'

export const GadgetCard: ParentComponent<ComponentProps<'div'>> = () => {
  return (
    <div class={cn('card', styles.root)}>
      <header class='card-header'>
        <p class={cn('card-header-title', styles['card-header-title'])}>
          Apple iPhone 15 Pro Max
        </p>
      </header>
      <div class={cn('card-content', styles['card-content'])}>
        <img
          src='https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg'
          alt=''
        />
      </div>
      <footer class={cn('card-footer', styles['card-footer'])}>
        <Button class='card-footer-item is-info'>Details</Button>
        <Button class='card-footer-item is-success'>Add to compare</Button>
      </footer>
    </div>
  )
}
