import React, { useMemo } from 'react'

import { Wrap, FlexContent } from '@softmaps/components/Grid'
import { CardLink } from '@softmaps/components/Card'
import Typography from '@softmaps/components/Typography'

import { ICardList } from './models'

declare const If: React.FunctionComponent<{ condition: any }>

const CardList: React.FC<ICardList> = ({ title, list }: ICardList) => {
  if (!list.length) {
    return null
  }

  const renderList = useMemo(
    () => (
      <FlexContent align="flex-start" as="ul">
        {list.map(({ code, label, title, image }) => (
          <CardLink
            key={code}
            label={label}
            link={`/detalhe/${code}`}
            title={title}
            image={image}
          />
        ))}
      </FlexContent>
    ),
    [list]
  )

  return (
    <>
      <If condition={title}>
        <Wrap margin align="flex-start">
          <Typography color="dark-low" sizeDesk="body-g" isBold>
            {title}
          </Typography>
        </Wrap>
      </If>

      {renderList}
    </>
  )
}

export default CardList
