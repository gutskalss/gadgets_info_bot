import { createEffect, onCleanup, useContext } from 'solid-js'

import { RootContext } from '@/App'
import { Filters, Navbar, GadgetsList } from '@/components/layout'
import { tg } from '@/constants'
import { useNavigate } from '@solidjs/router'

export const Root = () => {
  const { isFiltersActive, selectedGadgets } = useContext(RootContext)
  const navigate = useNavigate()

  tg.MainButton.setText('Open comparison')
  tg.MainButton.onClick(() => navigate('/compare'))

  createEffect(() => {
    if (selectedGadgets().length && !isFiltersActive()) {
      tg.MainButton.show()
      return
    }
    tg.MainButton.hide()
  })

  onCleanup(tg.MainButton.hide)

  return (
    <>
      <div class='container'>
        <Navbar />
        <GadgetsList />
      </div>

      <Filters />
    </>
  )
}
