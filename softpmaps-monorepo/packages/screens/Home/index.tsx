import React, { memo } from 'react'

import { Container } from '@softmaps/components/Grid'
import Search from '@softmaps/components/Search'
import Header from '@softmaps/components/Header'
import CardList from '@softmaps/components/CardList'
import Loader from '@softmaps/components/Loader'
import EmptyState from '@softmaps/components/EmptyState'

import { IHome } from './models'

const Home: React.FC<IHome> = ({ loading, error, data, onSearch }: IHome) => {
  return (
    <Container margin>
      <Header />
      <Search
        title="Qual país você gostaria de conhecer hoje?"
        onSubmit={e => onSearch(e)}
      />

      <Choose>
        <When condition={loading}>
          <Loader />
        </When>
        <When condition={error}>
          <EmptyState message="Infelizmente não foi possível encontrar o país escolhido. :(" />
        </When>
        <Otherwise>
          <If condition={data?.currentCountries.length}>
            <CardList title="Resultado da busca" list={data.currentCountries} />
          </If>
        </Otherwise>
      </Choose>

      <If condition={data?.lastFiveCountries.length}>
        <CardList title="Buscas recentes" list={data.lastFiveCountries} />
      </If>
    </Container>
  )
}

const MemoizedHome = memo(Home)

MemoizedHome.displayName = 'HomePage'

export default MemoizedHome
