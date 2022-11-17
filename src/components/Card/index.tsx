import React from 'react'
import { Link } from 'react-router-dom'

import Typography from '@softmaps/components/Typography'

import {
  Card as StyledCard,
  CardHeader,
  CardImage,
  CardDescription,
  CardWrapTitle
} from './styled'
import { ICard } from './models'

declare const If: React.FunctionComponent<{ condition: any }>

const Card = ({ children, label, title, image, imageAlt }: ICard) => {
  const hasTitle = Boolean(title)

  return (
    <StyledCard>
      <If condition={image}>
        <CardHeader hasTitle={hasTitle}>
          <div>
            <If condition={label}>
              <Typography size="body-m">{label}</Typography>
            </If>
            <CardWrapTitle color="dark-medium" size="title-p" isBold>
              {title}
            </CardWrapTitle>
          </div>
          <CardImage hasTitle={hasTitle} src={image} alt={imageAlt} />
        </CardHeader>
      </If>
      <If condition={children}>
        <CardDescription>{children}</CardDescription>
      </If>
    </StyledCard>
  )
}

const CardLink = ({ children, label, link, title, image, imageAlt }: ICard) => {
  const hasTitle = Boolean(title)

  return (
    <StyledCard>
      <Link to={link}>
        <If condition={image}>
          <CardHeader hasTitle={hasTitle}>
            <div>
              <If condition={label}>
                <Typography size="body-m">{label}</Typography>
              </If>
              <CardWrapTitle color="dark-medium" size="title-p" isBold>
                {title}
              </CardWrapTitle>
            </div>
            <CardImage hasTitle={hasTitle} src={image} alt={imageAlt} />
          </CardHeader>
        </If>
        <If condition={children}>
          <CardDescription>{children}</CardDescription>
        </If>
      </Link>
    </StyledCard>
  )
}

Card.defaultProps = {
  tag: 'div'
}

export { CardLink }
export default Card
