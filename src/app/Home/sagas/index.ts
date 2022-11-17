import { call, put, takeLatest } from 'redux-saga/effects'

import {
  getCountrySuccess,
  getCountryFailure,
  setUpdateLastFiveCountries
} from '../actions'
import { saveDetailCountry } from '../../Detail/actions'
import { HomeTypes } from '../types'

import { getCountryApi } from '@softmaps/services/endpoints/countryApi'
import { saveRecentlySearched } from '@softmaps/utils/recentlySearched'
import { DetailTypes } from '../../Detail/types'

function* getCountry(data) {
  const { payload: countryName } = data

  try {
    const response = yield call(getCountryApi, countryName)

    saveRecentlySearched(countryName)
    yield put(saveDetailCountry(response))
    yield put(getCountrySuccess(response))
  } catch (error) {
    yield put(getCountryFailure())
  }
}

function* updateLastFiveCountries(data) {
  const { payload } = data

  try {
    yield put(setUpdateLastFiveCountries(payload))
  } catch (error) {
    // Enviar erro para um Sentry/Dynatrace
  }
}

export default function* () {
  yield takeLatest(HomeTypes.COUNTRY_REQUEST, getCountry)
  yield takeLatest(DetailTypes.DETAIL_EDIT, updateLastFiveCountries)
}
