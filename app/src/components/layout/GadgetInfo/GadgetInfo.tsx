import { ParentComponent, ComponentProps } from 'solid-js'

import { TGadgetInfo } from '@/types/gadgetInfo'

import { config } from './config'

type TGadgetInfoProps = {
  selectedGadget: TGadgetInfo
}

export const GadgetInfo: ParentComponent<
  ComponentProps<'div'> & TGadgetInfoProps
> = ({ selectedGadget }) => {
  const { specifications, name } = selectedGadget
  return (
    <div class='table-container'>
      <table class='table is-bordered'>
        <thead>
          <tr>
            <th></th>
            <th>{name}</th>
          </tr>
        </thead>
        <tbody>
          {config.map(({ categoryKey, title, fields }) => (
            <>
              <tr>
                <td colSpan={2}>
                  <b>{title}</b>
                </td>
              </tr>
              {fields.map(({ fieldKey, title }) => (
                <tr>
                  <td>
                    <b>{title}</b>
                  </td>
                  {/* TODO fix typing */}
                  <td>{specifications[categoryKey][fieldKey]}</td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}
