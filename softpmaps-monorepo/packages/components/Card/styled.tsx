import styled, { css } from 'styled-components'
import { breakpoints } from '@softmaps/theme'
import { Typography } from '@softmaps/typography/styled'
import { slideUpAnimation } from '@softmaps/animations'

const Card = styled.div`
  max-width: 24rem;
  width: 100%;
  padding: 0.125rem;
  margin: 0 0 1rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  box-shadow: 0 1px 10px 0 rgb(var(--color-light-medium));
  transition: 300ms;
  animation: ${slideUpAnimation} 600ms forwards;

  &:hover {
    border-color: var(--color-primary);
    transition: 300ms;
    cursor: pointer;
  }

  @media ${breakpoints.desktop} {
    max-width: 24rem;
    margin: 0 0 1.5rem;
  }
`

const CardHeader = styled.div<{ hasTitle?: boolean }>`
  height: 5.5rem;
  display: flex;
  align-items: center;
  background-color: rgb(var(--color-light-gray));
  border: 0.25rem solid rgb(var(--color-light-gray));
  box-shadow: 0 1px 6px 0 rgb(var(--color-light-low));

  border-radius: 0.5rem;
  overflow: hidden;

  ${({ hasTitle }) =>
    hasTitle &&
    css`
      justify-content: space-between;
      padding: 0 0 0 0.25rem;
    `}
`

const CardImage = styled.img<{ hasTitle?: boolean }>`
  width: 100%;

  ${({ hasTitle }) =>
    hasTitle &&
    css`
      width: 8rem;
      height: 5.25rem;
      border-radius: 0.5rem;
    `}
`

const CardDescription = styled.div`
  padding: 0.5rem;
`

const CardWrapTitle = styled(Typography)`
  position: relative;
  max-width: 12rem;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export { Card, CardHeader, CardImage, CardDescription, CardWrapTitle }
