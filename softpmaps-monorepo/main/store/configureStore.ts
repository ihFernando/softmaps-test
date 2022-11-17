import { createStore, applyMiddleware, compose, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { HomeState } from '@softmaps/home-app/types'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

export interface ApplicationState {
  home: HomeState
}

const isBrowser = !!process.browser
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

export function getOrCreateState(initialState = {}) {
  if (!isBrowser) {
    return initialState
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initialState
  }

  return window[__NEXT_REDUX_STORE__]
}

const composeEnhancers =
  // @ts-expect-error: Ignorar definição do reduxdevtools
  isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

function configureStore() {
  const sagaMiddleware = createSagaMiddleware()

  const store: ApplicationState = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

  // console.tron.store

  if (isBrowser) {
    sagaMiddleware.run(rootSaga)
  }

  return store
}

export default configureStore
