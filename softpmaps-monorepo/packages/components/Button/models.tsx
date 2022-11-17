import { ReactNode, ButtonHTMLAttributes } from 'react'

export interface IButton
  extends Partial<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: ReactNode
  hide?: boolean
  isBold?: boolean
  modifier: 'primary' | 'secondary' | 'ghost'
  hasShadow: boolean
  onClick?: () => void
}
