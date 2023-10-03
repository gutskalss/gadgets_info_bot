import { ParentComponent, ComponentProps } from 'solid-js'
import { useNavigate } from '@solidjs/router'
import cn from 'classnames'

import { Button } from '@/components/ui/Button/Button'

import styles from './GadgetCard.module.scss'
import { TGadgetInfo } from '@/types/gadgetInfo'

export const GadgetCard: ParentComponent<
  ComponentProps<'div'> & TGadgetInfo
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
        <div class={styles['image-wrapper']}>
          <img src={imageUrl} alt={name} />
        </div>
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
