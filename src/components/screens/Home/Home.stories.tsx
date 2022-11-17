import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import { TNewCountry } from '@softmaps/types/Country'

import Home from '.'

export default {
  title: 'Pages/Home',
  component: Home,
  decorators: [withKnobs]
}

const countries: TNewCountry[] = [
  {
    code: 'BRA',
    label: 'Brasilia',
    title: 'Brasil',
    image: 'https://restcountries.eu/data/bra.svg'
  },
  {
    code: 'BRA',
    label: 'Brasilia',
    title: 'Brasil',
    image: 'https://restcountries.eu/data/bra.svg'
  },
  {
    code: 'BRA',
    label: 'Brasilia',
    title: 'Brasil',
    image: 'https://restcountries.eu/data/bra.svg'
  }
]

const data = {
  lastFiveCountries: countries,
  currentCountries: countries,
  recentlyCountries: []
}

export const Default: React.FC = () => (
  <Home
    loading={false}
    error={false}
    data={data}
    onSearch={e => console.log(e)}
  />
)
