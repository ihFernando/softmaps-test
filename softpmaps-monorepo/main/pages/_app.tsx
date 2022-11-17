import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import createStore from '../store/configureStore'

import GlobalStyle from '../layout/globalStyle'

const SoftMapsApp = ({ Component, pageProps }: AppProps) => {
  const store = createStore()

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  )
}

export default SoftMapsApp
