import { ParentComponent, ComponentProps } from 'solid-js'
import cn from 'classnames'

import styles from './Button.module.scss'

export const Button: ParentComponent<ComponentProps<'button'>> = ({
  class: classProp,
  ...props
}) => {
  return (
    <button class={cn('button', styles.root, classProp)} {...props}>
      {props.children}
    </button>
  )
}
