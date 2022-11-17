import React from 'react'
import Typography from '@softmaps/components/Typography'

import { Header as StyledHeader, Back } from './styled'

declare const If: React.FunctionComponent<{ condition: any }>

const Header: React.FC<{ backTo?: string }> = ({ backTo }) => {
  return (
    <StyledHeader>
      <Typography align="center" color="dark-medium" sizeDesk="title-p" isBold>
        Softmaps
      </Typography>
      <If condition={backTo}>
        <Back to={backTo}>
          <Typography color="dark-medium">Voltar</Typography>
        </Back>
      </If>
    </StyledHeader>
  )
}

export default Header
