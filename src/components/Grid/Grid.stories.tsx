import React from 'react'
import styled, { css } from 'styled-components'

import { Container, Content } from './styled'

export default {
  title: 'Components/Grid'
}

const Title = styled.h1`
  margin: 0 3rem;
  padding: 2rem;
`

const base = css`
  padding: 1rem;
  border-radius: 0.25rem;
`

const bg = css`
  ${base};
  background-color: #e5fbff;
  border: 1px solid #00dcff;
`

const StyledContainer = styled(Container)`
  ${bg};
`

const StyledContent = styled(Content)`
  ${base};
`

export const container = () => (
  <>
    <Title>Utilização do Container:</Title>

    <StyledContainer>
      Container ocupa 100% da tela e tem limite de <b>1024px</b>
    </StyledContainer>
  </>
)

export const content = () => (
  <>
    <Title>
      Utilização do <b>Content</b>:
    </Title>

    <Container>
      <StyledContent>
        É uma <b>div</b> com estilização pré-definida para sombras e bordas.
      </StyledContent>
    </Container>
  </>
)
