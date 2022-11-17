import React from 'react'
import Link from 'next/link'

import Typography from '@softmaps/components/Typography'

import { Header as StyledHeader, Back } from './styled'

const Header: React.FC<{ backTo?: string }> = ({ backTo }) => {
  return (
    <StyledHeader>
      <Typography align="center" color="dark-medium" sizeDesk="title-p" isBold>
        Softmaps
      </Typography>
      <If condition={backTo}>
        <Link href={backTo}>
          <Back>
            <Typography color="dark-medium">Voltar</Typography>
          </Back>
        </Link>
      </If>
    </StyledHeader>
  )
}

export default Header
