import { useSearchParams } from '@solidjs/router'
import { For, Show, createMemo, createSignal, useContext } from 'solid-js'
import cn from 'classnames'

import { RootContext } from '@/App'
import { BRANDS } from '@/constants'
import { Button, Modal } from '@/components/ui'

import styles from './Filters.module.scss'

function getBrandFromSearchParams(brands?: string) {
  return brands?.split(',') || []
}

export const Filters = () => {
  const { isFiltersActive, setIsFiltersActive } = useContext(RootContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedBrands, setSelectedBrands] = createSignal<string[]>(
    getBrandFromSearchParams(searchParams.brands)
  )

  const filtersChanged = createMemo(() => {
    const searchParamsValue = getBrandFromSearchParams(searchParams.brands)

    return (
      searchParamsValue.length !== selectedBrands().length ||
      !selectedBrands().every((brand) => searchParamsValue.includes(brand))
    )
  })

  return (
    <Modal
      isActive={isFiltersActive()}
      onClose={() => setIsFiltersActive(false)}
      contentClasses={styles.content}
    >
      <div class={styles['filter-block']}>
        <h2 class={cn('title is-2', styles['filter-block-title'])}>Brands</h2>

        <div class={styles['inputs-group']}>
          <For each={BRANDS}>
            {(brand) => (
              <label class={cn('checkbox', styles.input)}>
                <input
                  checked={searchParams.brands?.includes(brand)}
                  value={brand}
                  type='checkbox'
                  onChange={(e) => {
                    const value = e.target.value

                    if (selectedBrands().includes(value)) {
                      setSelectedBrands((prev) =>
                        [...prev].filter((brand) => brand !== value)
                      )
                      return
                    }

                    setSelectedBrands((prev) => [...prev, value])
                  }}
                ></input>
                {brand}
              </label>
            )}
          </For>
        </div>
      </div>

      <Show when={filtersChanged()}>
        <Button
          onClick={() => {
            setSearchParams({ brands: selectedBrands().join() })
            setIsFiltersActive(false)
          }}
          class={styles['apply-button']}
        >
          Apply
        </Button>
      </Show>
    </Modal>
  )
}
