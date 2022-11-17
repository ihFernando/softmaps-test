import { ReactNode } from 'react'

export interface ICard {
  children?: ReactNode
  tag?: string
  label?: string
  link?: string
  title?: string
  image?: string
  imageAlt?: string
}
