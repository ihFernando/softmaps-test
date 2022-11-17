import React from 'react'

import Typography from '.'

export default {
  title: 'Components/Typography',
  component: Typography
}

export const Default = () => (
  <>
    <Typography sizeDesk="title-g" color="dark-low">
      Title G
    </Typography>
    <Typography sizeDesk="title-m" color="dark-low">
      Title M
    </Typography>
    <Typography sizeDesk="title-p" color="dark-low">
      Title P
    </Typography>
    <Typography sizeDesk="body-g" color="dark-low">
      Body G
    </Typography>
    <Typography sizeDesk="body-m" color="dark-low">
      Body M
    </Typography>
    <Typography sizeDesk="body-p" color="dark-low">
      Body P
    </Typography>
    <Typography sizeDesk="body-pp" color="dark-low">
      Body PP
    </Typography>
  </>
)
