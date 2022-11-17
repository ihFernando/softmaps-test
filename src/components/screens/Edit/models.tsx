import { TNewCountry } from '@softmaps/types/Country'

export type TEdit = {
  currentCountry: TNewCountry
  redirectTo?: string
  loading?: boolean
  error?: boolean
  onSumbit: (e: TNewCountry) => void
}
