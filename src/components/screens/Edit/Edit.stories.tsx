import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import { TNewCountry } from '@softmaps/types/Country'

import Edit from '.'

export default {
  title: 'Pages/Edit',
  component: Edit,
  decorators: [withKnobs]
}

const country: TNewCountry = {
  code: 'BRA',
  label: 'Brasilia',
  title: 'Brasil',
  capital: 'Brasilia',
  image: 'https://restcountries.eu/data/bra.svg',
  lang: 'Português',
  population: 206.0,
  area: 100.0,
  topLevelDomain: ['.br']
}

export const Default: React.FC = () => (
  <Edit loading={false} currentCountry={country} onSumbit={e => alert(e)} />
)
