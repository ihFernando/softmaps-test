import { action } from 'typesafe-actions'
import { DetailTypes } from '../types'

export const saveDetailCountry = data =>
  action(DetailTypes.DETAIL_SUCCESS, data)

export const changeCurrentDetail = data =>
  action(DetailTypes.CHANGE_CURRENT_DETAIL, data)

export const editDetail = data => action(DetailTypes.DETAIL_EDIT, data)

export const getDetailRequest = data => action(DetailTypes.DETAIL_REQUEST, data)
export const getDetailSuccess = data => action(DetailTypes.DETAIL_SUCCESS, data)
export const getDetailFailure = () => action(DetailTypes.DETAIL_FAILURE)
