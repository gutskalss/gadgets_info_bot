import { useSearchParams } from '@solidjs/router'
import { useContext } from 'solid-js'
import classNames from 'classnames'

import { RootContext } from '@/App'
import { Input, Button } from '@/components/ui'

import styles from './Navbar.module.scss'

export const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { setIsFiltersActive } = useContext(RootContext)

  return (
    <nav
      class={classNames('navbar', styles.root)}
      role='navigation'
      aria-label='main navigation'
    >
      <Input
        placeholder='Search (ex.: fold)'
        value={searchParams.phone}
        onInput={(e) => setSearchParams({ phone: e.target.value })}
        class={styles['search-input']}
      />

      <Button onClick={() => setIsFiltersActive(true)} class='is-dark'>
        Filters
      </Button>
    </nav>
  )
}
