import styled, { css } from 'styled-components'
import { breakpoints } from '@softmaps/layout/Theme'

const Container = styled.section<{ margin?: boolean }>`
  padding: ${({ margin }) => (margin ? '3rem 0.5rem 0' : '2rem 0.5rem 0')};

  @media ${breakpoints.desktop} {
    max-width: 1200px;
    margin: 0 auto;
    padding: ${({ margin }) => (margin ? '8rem 0 0' : '2rem 0.5rem 0')};
  }
`

const Content = styled.div`
  border-radius: var(--theme-border-radius);
  box-shadow: var(--theme-shadow-light);
  background-color: rgb(var(--color-light-high));
  padding: 1rem;
`

const Wrap = styled.div<{
  margin?: boolean
  align: 'center' | 'flex-end' | 'flex-start'
}>`
  ${({ margin }) =>
    margin &&
    css`
      margin-top: 1rem;
      margin-bottom: 1rem;
    `};

  ${({ align }) =>
    align &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: ${align};
    `};
`

const FlexContent = styled.div<{
  align?: 'center' | 'flex-end' | 'flex-start' | 'space-between'
}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ align }) => align};
`

export { Container, Wrap, Content, FlexContent }
