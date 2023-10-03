import { ParentComponent, ComponentProps } from 'solid-js'
import cn from 'classnames'

export const Input: ParentComponent<ComponentProps<'input'>> = ({
  class: classProp,
  ...props
}) => {
  const classes = cn('input', classProp)

  return (
    <input type='text' class={classes} {...props}>
      {props.children}
    </input>
  )
}
