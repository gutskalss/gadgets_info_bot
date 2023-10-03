import { Component } from 'solid-js'
import { useSearchParams } from '@solidjs/router'
import classNames from 'classnames'

import { Input } from '@/components/ui/Input/Input'
import { Button } from '@/components/ui/Button/Button'

import styles from './Navbar.module.scss'

export const Navbar: Component = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <nav
      class={classNames('navbar', styles.root)}
      role='navigation'
      aria-label='main navigation'
    >
      <Input
        placeholder='Search (ex.: iphone 15)'
        value={searchParams.phone}
        onInput={(e) => setSearchParams({ phone: e.target.value })}
        class={styles['search-input']}
      />

      <Button class='is-dark'>Filters</Button>
    </nav>
  )
}
