import { all, fork } from 'redux-saga/effects'

import homeSagas from '@softmaps/home-app/sagas'
// import detailSagas from '../../apps/Detail/sagas'

export default function* rootSaga() {
  yield all([fork(homeSagas)])
  // yield all([fork(detailSagas)])
}
