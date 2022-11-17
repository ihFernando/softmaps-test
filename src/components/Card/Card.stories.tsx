import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import Card from '.'
import Typography from '@softmaps/components/Typography'
import styled from 'styled-components'

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [withKnobs]
}

const FlexContent = styled.div`
  display: flex;
  & > div:not(:first-child) {
    margin-left: 1rem;
  }
`

const Column = styled.div`
  width: 50%;
`

const Row = styled.div`
  margin-bottom: 0.5rem;
`

export const Default: React.FC = () => (
  <Card
    label="Brasilia"
    title="Brasil"
    image="https://restcountries.eu/data/bra.svg"
  />
)

export const Detail: React.FC = () => (
  <Card
    label="Detalhes"
    title="Estados Unidos"
    image="https://i.pinimg.com/474x/2a/c9/4c/2ac94c6e06132fd4de00ed98f9f76615.jpg"
  >
    <FlexContent>
      <Column>
        <Row>
          <Typography>Nome:</Typography>
          <Typography isBold>Estados Unidos</Typography>
        </Row>
        <Row>
          <Typography>Capital:</Typography>
          <Typography isBold>Washington</Typography>
        </Row>
        <Typography>Área:</Typography>
        <Typography isBold>XXX</Typography>
      </Column>
      <Column>
        <Row>
          <Typography>População:</Typography>
          <Typography isBold>XXX</Typography>
        </Row>
        <Row>
          <Typography>Língua:</Typography>
          <Typography isBold>XXX</Typography>
        </Row>
        <Typography>Top-level Domain:</Typography>
        <Typography isBold>XXX</Typography>
      </Column>
    </FlexContent>
  </Card>
)

export const BothCards: React.FC = () => (
  <>
    <Card
      label="Brasilia"
      title="Brasil"
      image="https://restcountries.eu/data/bra.svg"
    />
    <Card
      label="Detalhes"
      title="Estados Unidos"
      image="https://i.pinimg.com/474x/2a/c9/4c/2ac94c6e06132fd4de00ed98f9f76615.jpg"
    >
      <FlexContent>
        <Column>
          <Row>
            <Typography>Nome:</Typography>
            <Typography isBold>Estados Unidos</Typography>
          </Row>
          <Row>
            <Typography>Capital:</Typography>
            <Typography isBold>Washington</Typography>
          </Row>
          <Typography>Área:</Typography>
          <Typography isBold>XXX</Typography>
        </Column>
        <Column>
          <Row>
            <Typography>População:</Typography>
            <Typography isBold>XXX</Typography>
          </Row>
          <Row>
            <Typography>Língua:</Typography>
            <Typography isBold>XXX</Typography>
          </Row>
          <Typography>Top-level Domain:</Typography>
          <Typography isBold>XXX</Typography>
        </Column>
      </FlexContent>
    </Card>
  </>
)
