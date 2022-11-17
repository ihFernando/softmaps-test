import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import EmptyState from '.'

export default {
  title: 'Components/EmptyState',
  component: EmptyState,
  decorators: [withKnobs]
}

export const Default: React.FC = () => <EmptyState message="EmptyState" />
