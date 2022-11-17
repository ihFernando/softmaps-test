import React from 'react'
import { Provider } from 'react-redux'

import { Container } from '@softmaps/components/Grid'
import Routes from './routes'
import createStore from './store/configureStore'

const App: React.FC = () => {
  const store = createStore()
  return (
    <Provider store={store}>
      <Container>
        <Routes />
      </Container>
    </Provider>
  )
}

export default App
