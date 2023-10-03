import type { Component } from 'solid-js'

const tg = window.Telegram?.WebApp

import styles from './App.module.css'

export const App: Component = () => {
  return (
    <div class={styles.App}>
      Gadgets Info Bot
      <button onClick={tg.close}>Close</button>
    </div>
  )
}
