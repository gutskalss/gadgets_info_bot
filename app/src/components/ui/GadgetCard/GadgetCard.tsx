import { ParentComponent, ComponentProps } from 'solid-js'
import { useNavigate } from '@solidjs/router'
import cn from 'classnames'

import { Button } from '@/components/ui/Button/Button'

import styles from './GadgetCard.module.scss'

export type TGadgetCardProps = {
  gadgetId: number
  name: string
  imageUrl: string
}

export const GadgetCard: ParentComponent<
  ComponentProps<'div'> & TGadgetCardProps
> = ({ gadgetId, name, imageUrl }) => {
  const navigate = useNavigate()

  return (
    <div class={cn('card', styles.root)}>
      <header class='card-header'>
        <p class={cn('card-header-title', styles['card-header-title'])}>
          {name}
        </p>
      </header>
      <div class={cn('card-content', styles['card-content'])}>
        <img src={imageUrl} alt={name} />
      </div>
      <footer class={cn('card-footer', styles['card-footer'])}>
        <Button
          onClick={() => {
            navigate(`gadget/${gadgetId}`)
          }}
          class='card-footer-item is-info'
        >
          Details
        </Button>
        <Button class='card-footer-item is-success'>Add to compare</Button>
      </footer>
    </div>
  )
}
