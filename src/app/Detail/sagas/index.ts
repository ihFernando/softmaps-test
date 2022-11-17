import { put, takeLatest, select, call } from 'redux-saga/effects'

import { ApplicationState } from '../../../store/configureStore'
import { getCoyntryByAlphaCodeApi } from '@softmaps/services/endpoints/countryApi'

import {
  changeCurrentDetail,
  getDetailSuccess,
  getDetailFailure
} from '../../Detail/actions'
import { DetailTypes } from '../types'

function* getDetailCountry(data) {
  const { payload: countryCode } = data

  try {
    const { allDetails } = yield select(
      (state: ApplicationState) => state.detail.data
    )
    const hasCountryInState = Boolean(
      allDetails.filter(({ code }) => code === countryCode).length
    )

    if (hasCountryInState) {
      yield put(changeCurrentDetail(countryCode))
    } else {
      const response = yield call(getCoyntryByAlphaCodeApi, countryCode)

      yield put(getDetailSuccess(response))
    }
  } catch (error) {
    yield put(getDetailFailure())
  }
}

export default function* () {
  yield takeLatest(DetailTypes.DETAIL_REQUEST, getDetailCountry)
}
