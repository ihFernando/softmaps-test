import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { TCardList } from './models'

import CardList from '.'

export default {
  title: 'Components/CardList',
  component: CardList,
  decorators: [withKnobs]
}

const countries: TCardList[] = [
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

export const Default: React.FC = () => (
  <CardList title={text('Title', 'Resultados:')} list={countries} />
)
