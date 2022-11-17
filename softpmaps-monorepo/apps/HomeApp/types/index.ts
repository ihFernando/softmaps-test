import { THome } from '@softmaps/types/Home'

export enum HomeTypes {
  COUNTRY_REQUEST = '@home/COUNTRY_REQUEST',
  COUNTRY_SUCCESS = '@home/COUNTRY_SUCCESS',
  COUNTRY_FAILURE = '@home/COUNTRY_FAILURE',
  COUNTRY_EDIT_LAST_SEARCHED = '@home/COUNTRY_EDIT_LAST_SEARCHED'
}

export interface HomeState {
  readonly data: THome['data']
  readonly loading: boolean
  readonly error: boolean
}
