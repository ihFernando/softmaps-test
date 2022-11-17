import styled, { css } from 'styled-components'
import { fadeInAnimation } from '@softmaps/animations'
import { IButton } from './models'

const COLORS = {
  silver: 'rgb(var(--color-light-low))',
  gray: 'var(--color-dark-medium)',
  lightgray: 'var(--color-dark-low)',
  snow: 'rgb(var(--color-light-high))',
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
  'dark-high': 'var(--color-dark-high)',
}

const THEME_BUTTON = {
  ghost: {
    background: COLORS.snow,
    color: COLORS.gray,
    border: COLORS.gray,
  },
  primary: {
    background: COLORS.primary,
    color: COLORS.snow,
    border: COLORS.primary,
  },
  secondary: {
    background: COLORS.secondary,
    color: COLORS.snow,
    border: COLORS.secondary,
  },
}

const Button = styled.button<IButton>`
  position: relative;
  max-width: 35rem;
  width: 100%;
  height: 3rem;
  margin: 0;
  border-radius: 0.25rem;
  font-weight: bold;
  transition: 500ms;
  opacity: 0;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  animation: ${fadeInAnimation} 1s forwards;
  color: ${COLORS.gray};
  border: solid 1px ${({ modifier }) => COLORS[modifier]};
  background-color: ${COLORS.snow};
  &:hover {
    cursor: pointer;
  }

  &:hover {
    opacity: 0.9 !important;
  }

  &:active {
    opacity: 0.7 !important;
  }

  &:active,
  &:focus {
    outline: none;
  }

  ${({ isBold }) =>
    isBold &&
    css`
      font-weight: 900;
    `};

  ${({ hasShadow }) =>
    hasShadow &&
    css`
      box-shadow: 0 1px 0.75rem 0 ${COLORS.lightgray};
    `};

  ${({ modifier }) =>
    modifier &&
    css`
      color: ${THEME_BUTTON[modifier].color};
      background-color: ${THEME_BUTTON[modifier].background};

      &:hover,
      &:active {
        border-color: ${THEME_BUTTON[modifier].border};
        box-shadow: 0 0 0 0.25rem hsl(271deg 47% 18% / 44%);
      }
    `};
`

export { Button }
