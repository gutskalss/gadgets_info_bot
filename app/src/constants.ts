import { Brands } from './types/gadgetInfo'

export const MAX_COMPARE_AMOUNT = 2

export const BRANDS = Object.values(Brands).map((key) => key)

export const tg = window.Telegram?.WebApp
