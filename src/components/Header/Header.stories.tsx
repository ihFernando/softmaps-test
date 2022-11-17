import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import Header from '.'

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [withKnobs]
}

export const Default: React.FC = () => <Header />
export const WithBack: React.FC = () => <Header backTo="#" />
