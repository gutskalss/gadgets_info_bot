import { ComponentProps, ParentComponent } from 'solid-js'
import cn from 'classnames'

import styles from './Modal.module.scss'

type TModalProps = {
  isActive: boolean
  onClose(): void
  contentClasses?: string
}

export const Modal: ParentComponent<ComponentProps<'div'> & TModalProps> = (
  props
) => {
  return (
    <div class={cn('modal', { 'is-active': props.isActive })}>
      <div onClick={props.onClose} class='modal-background'></div>
      <div class={cn('modal-content', styles.content, props.contentClasses)}>
        {props.children}
        <button
          onClick={props.onClose}
          class={cn('modal-close is-large', styles['modal-close'])}
          aria-label='close'
        ></button>
      </div>
    </div>
  )
}
