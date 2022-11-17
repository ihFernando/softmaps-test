import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import Loader from '.'

export default {
  title: 'Components/Loader',
  component: Loader,
  decorators: [withKnobs]
}

export const Default: React.FC = () => <Loader />
