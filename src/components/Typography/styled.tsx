import styled, { css } from 'styled-components'
import { breakpoints } from '@softmaps/layout/Theme'
import { ITypography } from './models'

const Typography = styled.p<ITypography>`
  color: var(--color-${({ color }) => color});
  font-size: var(--text-${({ size }) => size});
  font-weight: ${({ isBold }) => (isBold ? '900' : '300')};
  ${({ sizeDesk }) =>
    sizeDesk &&
    css`
      @media screen and ${breakpoints.tablet} {
        font-size: var(--text-${sizeDesk});
      }
    `}
`

export { Typography }
