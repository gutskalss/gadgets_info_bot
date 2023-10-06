import { ParentComponent, ComponentProps, For } from 'solid-js'

import { TGadgetInfo } from '@/types/gadgetInfo'

import { config } from './config'

type TGadgetsTableProps = {
  selectedGadgets: TGadgetInfo[]
}

export const GadgetsTable: ParentComponent<
  ComponentProps<'div'> & TGadgetsTableProps
> = ({ selectedGadgets }) => {
  return (
    <div class='table-container'>
      <table class='table is-bordered'>
        <thead>
          <tr>
            <th></th>
            <For each={selectedGadgets}>
              {(gadget) => <th>{gadget.name}</th>}
            </For>
          </tr>
        </thead>
        <tbody>
          {config.map(({ categoryKey, title, fields }) => (
            <>
              <tr>
                <td colSpan={selectedGadgets.length + 1}>
                  <b>{title}</b>
                </td>
              </tr>
              {fields.map(({ fieldKey, title }) => (
                <>
                  <tr>
                    <td>
                      <b>{title}</b>
                    </td>

                    {/* TODO fix typing */}
                    <For each={selectedGadgets}>
                      {(gadget) => (
                        <td>{gadget.specifications[categoryKey][fieldKey]}</td>
                      )}
                    </For>
                  </tr>
                </>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}
