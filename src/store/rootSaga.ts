import { all, fork } from 'redux-saga/effects'

import homeSagas from '../app/Home/sagas'
import detailSagas from '../app/Detail/sagas'

export default function* rootSaga() {
  yield all([fork(homeSagas)])
  yield all([fork(detailSagas)])
}
