import { ParentComponent, ComponentProps, For } from 'solid-js'
import cn from 'classnames'

import { TGadgetInfo } from '@/types/gadgetInfo'
import { config } from './config'

import styles from './GadgetsTable.module.scss'

type TGadgetsTableProps = {
  selectedGadgets: TGadgetInfo[]
}

export const GadgetsTable: ParentComponent<
  ComponentProps<'div'> & TGadgetsTableProps
> = ({ selectedGadgets }) => {
  return (
    <div class={cn('table-container', styles.root)}>
      <table class='table is-bordered'>
        <thead>
          <tr>
            <For each={selectedGadgets}>
              {(gadget) => <th>{gadget.name}</th>}
            </For>
          </tr>
        </thead>
        <tbody>
          {config.map(({ categoryKey, title: category, fields }) =>
            fields.map(({ fieldKey, title: subcategory }) => (
              <>
                <tr>
                  <td class='category-row' colSpan={selectedGadgets.length + 1}>
                    <b>
                      <span>{category}</span> / <span>{subcategory}</span>
                    </b>
                  </td>
                </tr>

                <tr>
                  {/* TODO fix typing */}
                  <For each={selectedGadgets}>
                    {(gadget) => (
                      <td>{gadget.specifications[categoryKey][fieldKey]}</td>
                    )}
                  </For>
                </tr>
              </>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
