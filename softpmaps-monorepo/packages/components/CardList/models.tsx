import { TNewCountry } from '@softmaps/types/Country'

export type TCardList = {
  code: string
  label: string
  title: string
  image: string
}

export interface ICardList {
  title: string
  list: TNewCountry[]
}
