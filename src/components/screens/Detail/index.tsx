import React, { memo, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Container, FlexContent } from '@softmaps/components/Grid'
import Card from '@softmaps/components/Card'
import CardList from '@softmaps/components/CardList'
import Button from '@softmaps/components/Button'
import Loader from '@softmaps/components/Loader'
import Typography from '@softmaps/components/Typography'
import Maps from '@softmaps/components/Maps'
import EmptyState from '@softmaps/components/EmptyState'

import { TDetail } from './models'

import { Wrap, Column, Row } from './styled'

declare const If: React.FunctionComponent<{ condition: any }>
declare const Choose: React.FunctionComponent
declare const When: React.FunctionComponent<{ condition: any }>
declare const Otherwise: React.FunctionComponent

const Detail: React.FC<TDetail> = ({
  loading,
  error,
  currentCountry,
  recentlyCountries
}: TDetail) => {
  useEffect(() => window.scrollTo(0, 0), [currentCountry])

  const countryMap = {
    latitude: currentCountry?.latlng[0],
    longitude: currentCountry?.latlng[1],
    zoom: currentCountry?.area < 1000 * 10 ? 5 : 2.5
  }

  return (
    <Container>
      <Wrap>
        <Choose>
          <When condition={error}>
            <EmptyState message="Página não encontrada :(" />
          </When>
          <When condition={loading}>
            <Loader />
          </When>
          <Otherwise>
            <Card
              label="Detalhes"
              title={currentCountry?.title}
              image={currentCountry?.image}
            >
              <FlexContent>
                <Column>
                  <If condition={currentCountry?.title}>
                    <Row>
                      <Typography>Nome:</Typography>
                      <Typography isBold>{currentCountry?.title}</Typography>
                    </Row>
                  </If>
                  <If condition={currentCountry?.capital}>
                    <Row>
                      <Typography>Capital:</Typography>
                      <Typography isBold>{currentCountry?.capital}</Typography>
                    </Row>
                  </If>
                  <If condition={currentCountry?.area}>
                    <Typography>Área:</Typography>
                    <Typography isBold>{currentCountry?.area} km²</Typography>
                  </If>
                </Column>
                <Column>
                  <If condition={currentCountry?.population}>
                    <Row>
                      <Typography>População:</Typography>
                      <Typography isBold>
                        {currentCountry?.population}
                      </Typography>
                    </Row>
                  </If>
                  <If condition={currentCountry?.lang}>
                    <Row>
                      <Typography>Língua:</Typography>
                      <Typography isBold>{currentCountry?.lang}</Typography>
                    </Row>
                  </If>
                  <If condition={currentCountry?.topLevelDomain}>
                    <Typography>Top-level Domain:</Typography>
                    <Typography isBold>
                      {currentCountry?.topLevelDomain}
                    </Typography>
                  </If>
                </Column>
              </FlexContent>
              <br />

              <If condition={currentCountry?.code}>
                <Link to={`/detalhe/${currentCountry?.code}/editar`}>
                  <Button modifier="ghost" hasShadow={false}>
                    Editar
                  </Button>
                </Link>
              </If>
            </Card>

            <If
              condition={
                countryMap.latitude &&
                countryMap.longitude &&
                process.env.REACT_APP_API_MAPBOX_KEY
              }
            >
              <Typography color="dark-low" sizeDesk="body-g" isBold>
                Mapa:
              </Typography>
              <Maps {...countryMap} />
            </If>
            <br />
          </Otherwise>
        </Choose>

        <If condition={recentlyCountries}>
          <CardList title="Buscas Recentes:" list={recentlyCountries} />
        </If>
      </Wrap>
    </Container>
  )
}

const MemoizedDetail = memo(Detail)

MemoizedDetail.displayName = 'DetailPage'

export default MemoizedDetail
