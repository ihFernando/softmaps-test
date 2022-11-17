import { ReactNode } from 'react'
import { TColors } from '../../layout/Theme/colors'

export type TTypographySize =
  | 'title-g'
  | 'title-m'
  | 'title-p'
  | 'body-g'
  | 'body-m'
  | 'body-p'
  | 'body-pp'

interface ITypography {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  align?: 'left' | 'center' | 'right'
  size?: TTypographySize
  sizeDesk?: TTypographySize | null
  isBold?: boolean
  color?: TColors
}

export type { ITypography }
