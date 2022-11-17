import { action } from 'typesafe-actions'
import { HomeTypes } from '../types'

export const getCountryRequest = data => action(HomeTypes.COUNTRY_REQUEST, data)
export const getCountrySuccess = data => action(HomeTypes.COUNTRY_SUCCESS, data)
export const getCountryFailure = () => action(HomeTypes.COUNTRY_FAILURE)
export const setUpdateLastFiveCountries = data =>
  action(HomeTypes.COUNTRY_EDIT_LAST_SEARCHED, data)
