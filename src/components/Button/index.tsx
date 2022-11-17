import React from 'react'

import { Button as StyledButton } from './styled'

import { IButton } from './models'

const Button = ({
  children,
  hide,
  isBold,
  modifier,
  hasShadow,
  ...props
}: IButton) => (
  <StyledButton
    hide={hide}
    isBold={isBold}
    modifier={modifier}
    hasShadow={hasShadow}
    {...props}
  >
    {children}
  </StyledButton>
)

Button.displayName = 'Button'

Button.defaultProps = {
  hide: false,
  isBold: false,
  modifier: 'primary',
  hasShadow: true
}

export default Button
