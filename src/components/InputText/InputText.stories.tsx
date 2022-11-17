import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import InputText from '.'

export default {
  title: 'Components/InputText',
  component: InputText,
  decorators: [withKnobs]
}

export const Default: React.FC = () => (
  <InputText
    fieldName="stories"
    placeholder={text('Placeholder', 'InputText')}
  />
)
