import {
  ParentComponent,
  ComponentProps,
  useContext,
  createMemo,
  Show,
  Switch,
  Match,
} from 'solid-js'
import { useNavigate } from '@solidjs/router'
import cn from 'classnames'

import { Button } from '@/components/ui/Button/Button'
import { TGadgetInfo } from '@/types/gadgetInfo'
import { RootContext } from '@/App'
import { MAX_COMPARE_AMOUNT } from '@/constants'

import styles from './GadgetCard.module.scss'

export const GadgetCard: ParentComponent<
  ComponentProps<'div'> & TGadgetInfo
> = ({ gadgetId, name, imageUrl }) => {
  const navigate = useNavigate()
  const { selectedGadgets, setSelectedGadgets } = useContext(RootContext)

  const maxGadgetSelected = createMemo(
    () => selectedGadgets().length >= MAX_COMPARE_AMOUNT
  )
  const isGadgetSelected = createMemo(() =>
    selectedGadgets().includes(gadgetId)
  )

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

        <Show when={isGadgetSelected()}>
          <Button
            class='card-footer-item is-danger is-light'
            onClick={() => {
              setSelectedGadgets(
                selectedGadgets().filter((id) => id !== gadgetId)
              )
            }}
          >
            Remove from compare
          </Button>
        </Show>

        {/* TODO Merge two buttons bellow in one. */}
        {/* The difference between them is only in disables state. */}
        <Switch>
          <Match when={!isGadgetSelected() && !maxGadgetSelected()}>
            <Button
              class='card-footer-item is-success'
              onClick={() => {
                setSelectedGadgets([...selectedGadgets(), gadgetId])
              }}
            >
              Add to compare
            </Button>
          </Match>
          <Match when={!isGadgetSelected() && maxGadgetSelected()}>
            <Button class='card-footer-item is-success' disabled>
              Add to compare
            </Button>
          </Match>
        </Switch>
      </footer>
    </div>
  )
}
