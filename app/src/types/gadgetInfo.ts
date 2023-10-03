import { ExtractFieldsOfType } from './utils'

export type TGadgetInfo = {
  gadgetId: number
  name: string
  imageUrl: string
  specifications: TGadgetSpecs
}

export type TGadgetSpecs = {
  network: {
    technology: string
  }
  launch: {
    announced: string
    status: string
  }
  body: {
    dimensions: string
    weight: string
    build: string
    sim: string
    colors: string
  }
  display: {
    type: string
    size: string
    resolution: string
    protection: string
  }
  platform: {
    os: string
    chipset: string
    cpu: string
    gpu: string
  }
  memory: {
    cardSlot: string
    internal: string
  }
  mainCamera: {
    modules: string
    features: string
    video: string
  }
  selfieCamera: {
    modules: string
    features: string
    video: string
  }
  sound: {
    loudspeaker: string
    jack: string
  }
  comms: {
    wlan: string
    bluetooth: string
    positioning: string
    nfc: string
    infraredPort: string
    radio: string
    usb: string
  }
  features: {
    sensors: string
  }
  battery: {
    type: string
    charging: string
  }
  tests: {
    performance: string
    loudspeaker: string
    batteryLife: string
  }
}

export type TSpecsCategories = ExtractFieldsOfType<TGadgetSpecs, object>
