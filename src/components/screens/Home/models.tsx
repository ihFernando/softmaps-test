import { THome } from '@softmaps/types/Home'

export interface IHome extends THome {
  loading: boolean
  error: boolean
  onSearch: (e: string) => void
}
