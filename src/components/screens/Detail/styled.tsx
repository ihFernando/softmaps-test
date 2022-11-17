import styled from 'styled-components'
import { breakpoints } from '@softmaps/layout/Theme'

const Wrap = styled.div`
  max-width: 24rem;
  margin: 1rem auto;

  @media ${breakpoints.desktop} {
    margin: 3rem auto;
  }
`

const Column = styled.div`
  width: 50%;
`

const Row = styled.div`
  margin-bottom: 0.5rem;
`

export { Wrap, Column, Row }
