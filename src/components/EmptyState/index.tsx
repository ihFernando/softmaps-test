import React from 'react'

import Typography from '@softmaps/components/Typography'

import { EmptyState as StyledEmptyState } from './styled'

const EmptyState: React.FC<{ message: string }> = ({ message }) => {
  return (
    <StyledEmptyState>
      <Typography align="center" size="body-g" isBold>
        {message}
      </Typography>
    </StyledEmptyState>
  )
}

export default EmptyState
