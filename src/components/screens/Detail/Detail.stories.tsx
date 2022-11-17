import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { TNewCountry } from '@softmaps/types/Country'

import Detail from '.'

export default {
  title: 'Pages/Detail',
  component: Detail,
  decorators: [withKnobs]
}

const countries: TNewCountry[] = [
  {
    code: 'BRA',
    label: 'Brasilia',
    title: 'Brasil',
    capital: 'Brasilia',
    image: 'https://restcountries.eu/data/bra.svg',
    latlng: [10, 20],
    lang: 'Português',
    topLevelDomain: ['.br']
  },
  {
    code: 'BRA',
    label: 'Brasilia',
    title: 'Brasil',
    capital: 'Brasilia',
    image: 'https://restcountries.eu/data/bra.svg',
    latlng: [10, 20],
    lang: 'Português',
    topLevelDomain: ['.br']
  }
]

export const Default: React.FC = () => (
  <Detail
    loading={false}
    currentCountry={countries[0]}
    recentlyCountries={countries}
  />
)
