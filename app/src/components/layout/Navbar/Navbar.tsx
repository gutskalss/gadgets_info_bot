import { Component, createSignal } from 'solid-js'
import classNames from 'classnames'

import { Input } from '@/components/ui/Input/Input'
import { Button } from '@/components/ui/Button/Button'

import styles from './Navbar.module.scss'

export const Navbar: Component = () => {
  const [value, setValue] = createSignal<string>()

  return (
    <nav
      class={classNames('navbar', styles.root)}
      role='navigation'
      aria-label='main navigation'
    >
      <Input
        placeholder='Search (ex.: iphone 15)'
        value={value()}
        onChange={(e) => setValue(e.target.value)}
        class={styles['search-input']}
      />

      <Button class='is-dark'>Filters</Button>
    </nav>
  )
}
