import { TNewCountry } from '@softmaps/types/Country'

export enum DetailTypes {
  CHANGE_CURRENT_DETAIL = '@detail/CHANGE_CURRENT_DETAIL',
  DETAIL_REQUEST = '@detail/DETAIL_REQUEST',
  DETAIL_SUCCESS = '@detail/DETAIL_SUCCESS',
  DETAIL_FAILURE = '@detail/DETAIL_FAILURE',
  DETAIL_EDIT = '@detail/DETAIL_EDIT'
}

export interface DetailState {
  readonly data: {
    allDetails: TNewCountry[]
    currentDetail: TNewCountry
    editedCountries?: {
      codes: string[]
      countries?: TNewCountry[]
    }
  }
  readonly loading: boolean
  readonly error: boolean
}
