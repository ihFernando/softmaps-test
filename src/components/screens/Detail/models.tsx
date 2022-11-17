import { TNewCountry } from '@softmaps/types/Country'

export type TDetail = {
  loading: boolean
  error?: boolean
  currentCountry: TNewCountry
  recentlyCountries?: TNewCountry[]
}
