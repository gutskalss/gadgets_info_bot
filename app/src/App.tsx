import type { Component } from 'solid-js'

import logo from './logo.svg'
import styles from './App.module.css'

export const App: Component = () => {
  return (
    <div class={styles.App}>
      <img src={logo} class={styles.logo} alt='logo' />
      Hello
    </div>
  )
}
