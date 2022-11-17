import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import Search from '.'

export default {
  title: 'Components/Search',
  component: Search,
  decorators: [withKnobs]
}

export const Default: React.FC = () => (
  <Search title="Procurar" onSubmit={e => alert(e)} />
)
