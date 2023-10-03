import { TSpecsCategories } from '@/types/gadgetInfo'

type TGadgetInfoField = {
  fieldKey: string
  title: string
}

type TGadgetInfoConfig = {
  categoryKey: TSpecsCategories
  title: string
  fields: TGadgetInfoField[]
}

export const config: TGadgetInfoConfig[] = [
  {
    categoryKey: 'network',
    title: 'Network',
    fields: [
      {
        fieldKey: 'technology',
        title: 'Technology',
      },
    ],
  },
  {
    categoryKey: 'launch',
    title: 'Launch',
    fields: [
      {
        fieldKey: 'announced',
        title: 'Announced',
      },
      {
        fieldKey: 'status',
        title: 'Status',
      },
    ],
  },
  {
    categoryKey: 'body',
    title: 'Body',
    fields: [
      {
        fieldKey: 'dimensions',
        title: 'Dimensions',
      },
      {
        fieldKey: 'weight',
        title: 'Weight',
      },
      {
        fieldKey: 'build',
        title: 'Build',
      },
      {
        fieldKey: 'sim',
        title: 'SIM',
      },
      {
        fieldKey: 'colors',
        title: 'Colors',
      },
    ],
  },
  {
    categoryKey: 'display',
    title: 'Display',
    fields: [
      {
        fieldKey: 'type',
        title: 'Type',
      },
      {
        fieldKey: 'size',
        title: 'Size',
      },
      {
        fieldKey: 'resolution',
        title: 'Resolution',
      },
      {
        fieldKey: 'protection',
        title: 'Protection',
      },
    ],
  },
  {
    categoryKey: 'platform',
    title: 'Platform',
    fields: [
      {
        fieldKey: 'os',
        title: 'OS',
      },
      {
        fieldKey: 'chipset',
        title: 'Chipset',
      },
      {
        fieldKey: 'cpu',
        title: 'CPU',
      },
      {
        fieldKey: 'gpu',
        title: 'GPU',
      },
    ],
  },
  {
    categoryKey: 'memory',
    title: 'Memory',
    fields: [
      {
        fieldKey: 'cardSlot',
        title: 'Card Slot',
      },
      {
        fieldKey: 'internal',
        title: 'Internal',
      },
    ],
  },
  {
    categoryKey: 'mainCamera',
    title: 'Main Camera',
    fields: [
      {
        fieldKey: 'modules',
        title: 'Modules',
      },
      {
        fieldKey: 'features',
        title: 'Features',
      },
      {
        fieldKey: 'video',
        title: 'Video',
      },
    ],
  },
  {
    categoryKey: 'selfieCamera',
    title: 'Selfie Camera',
    fields: [
      {
        fieldKey: 'modules',
        title: 'Modules',
      },
      {
        fieldKey: 'features',
        title: 'Features',
      },
      {
        fieldKey: 'video',
        title: 'Video',
      },
    ],
  },
  {
    categoryKey: 'sound',
    title: 'Sound',
    fields: [
      {
        fieldKey: 'loudspeaker',
        title: 'Loudspeaker',
      },
      {
        fieldKey: 'jack',
        title: '3.5mm jack',
      },
    ],
  },
  {
    categoryKey: 'comms',
    title: 'Comms',
    fields: [
      {
        fieldKey: 'wlan',
        title: 'WLAN',
      },
      {
        fieldKey: 'bluetooth',
        title: 'Bluetooth',
      },
      {
        fieldKey: 'positioning',
        title: 'Positioning',
      },
      {
        fieldKey: 'nfc',
        title: 'NFC',
      },
      {
        fieldKey: 'infraredPort',
        title: 'Infrared Port',
      },
      {
        fieldKey: 'radio',
        title: 'Radio',
      },
      {
        fieldKey: 'usb',
        title: 'USB',
      },
    ],
  },
  {
    categoryKey: 'features',
    title: 'features',
    fields: [
      {
        fieldKey: 'sensors',
        title: 'sensors',
      },
    ],
  },
  {
    categoryKey: 'battery',
    title: 'battery',
    fields: [
      {
        fieldKey: 'type',
        title: 'Type',
      },
      {
        fieldKey: 'charging',
        title: 'Charging',
      },
    ],
  },
  {
    categoryKey: 'tests',
    title: 'Tests',
    fields: [
      {
        fieldKey: 'performance',
        title: 'Performance',
      },
      {
        fieldKey: 'loudspeaker',
        title: 'Loudspeaker',
      },
      {
        fieldKey: 'batteryLife',
        title: 'Battery Life',
      },
    ],
  },
]
