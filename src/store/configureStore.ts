import { createStore, applyMiddleware, compose, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { HomeState } from '../app/Home/types'
import { DetailState } from '../app/Detail/types'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

export interface ApplicationState {
  home: HomeState
  detail: DetailState
}

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    // @ts-expect-error: Ignorar definição do reduxdevtools
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    // @ts-expect-error: Ignorar definição do reduxdevtools
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25
    })) ||
  compose

function configureStore() {
  const sagaMiddleware = createSagaMiddleware()

  const store: Store<ApplicationState> = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
