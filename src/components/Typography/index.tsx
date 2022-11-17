import React from 'react'

import { ITypography } from './models'

import { Typography as StyledTypography } from './styled'

const Typography: React.FC<ITypography> = ({
  children,
  as,
  align,
  size,
  sizeDesk,
  isBold,
  color
}: ITypography) => (
  <StyledTypography
    as={as}
    align={align}
    size={size}
    sizeDesk={sizeDesk}
    isBold={isBold}
    color={color}
  >
    {children}
  </StyledTypography>
)

Typography.displayName = 'Typography'

Typography.defaultProps = {
  as: 'p',
  align: 'left',
  size: 'body-m',
  sizeDesk: null,
  isBold: false,
  color: 'dark-medium'
}

export default Typography
