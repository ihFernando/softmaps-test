import { addDecorator } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import GlobalStyle from '../src/layout/globalStyle'

addDecorator(story => (
  <>
    <MemoryRouter>
      <GlobalStyle />
      {story()}
    </MemoryRouter>
  </>
))
