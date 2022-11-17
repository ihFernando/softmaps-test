import React, { useEffect, useState, memo } from 'react'
import { useHistory } from 'react-router-dom'

import { Container, FlexContent } from '@softmaps/components/Grid'
import EmptyState from '@softmaps/components/EmptyState'
import InputText from '@softmaps/components/InputText'
import Typography from '@softmaps/components/Typography'
import Button from '@softmaps/components/Button'
import Card from '@softmaps/components/Card'
import Loader from '@softmaps/components/Loader'
import FileUpload from '@softmaps/components/FileUpload'
import compareObjects from '@softmaps/utils/compareObjects'

import { TNewCountry } from '@softmaps/types/Country'
import { TEdit } from './models'

import { Wrap, Row, Column } from './styled'

declare const If: React.FunctionComponent<{ condition: any }>
declare const Choose: React.FunctionComponent
declare const When: React.FunctionComponent<{ condition: any }>
declare const Otherwise: React.FunctionComponent

const Edit: React.FC<TEdit> = ({
  redirectTo,
  currentCountry,
  loading,
  error,
  onSumbit
}: TEdit) => {
  if (loading) {
    return <Loader />
  }

  const history = useHistory()

  const [fields, setFields] = useState({
    title: currentCountry?.title,
    label: currentCountry?.label,
    capital: currentCountry?.capital,
    lang: currentCountry?.lang,
    topLevelDomain: currentCountry?.topLevelDomain,
    image: currentCountry?.image
  })
  const [isEditedCountry, setIsEditedCountry] = useState(false)
  const [editedCountry, setEditedCountry] = useState<TNewCountry>(
    currentCountry
  )

  useEffect(() => setEditedCountry({ ...currentCountry, ...fields }), [fields])
  useEffect(() => setFields({ ...fields, label: fields.capital }), [
    fields.capital
  ])

  useEffect(() => {
    setIsEditedCountry(!compareObjects(editedCountry, currentCountry))
  }, [editedCountry])

  const handleChangeField = (field, value) => {
    setFields({ ...fields, [`${field}`]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    onSumbit(editedCountry)

    if (redirectTo) {
      history.push(redirectTo)
    }
  }

  return (
    <Container>
      <Wrap>
        <Typography size="title-p" isBold>
          Editar
        </Typography>
        <br />
        <Choose>
          <When condition={error}>
            <EmptyState message="Página não encontrada :(" />
          </When>
          <Otherwise>
            <Card
              label="Você está editando:"
              title={currentCountry?.title}
              image={currentCountry?.image}
            />
            <form onSubmit={e => handleSubmit(e)}>
              <FlexContent align="space-between">
                <Column>
                  <Typography isBold>Nome:</Typography>
                  <InputText
                    fieldName="name"
                    value={fields.title}
                    onChange={e =>
                      handleChangeField('title', e.currentTarget.value)
                    }
                  />

                  <Typography isBold>Capital:</Typography>
                  <InputText
                    fieldName="capital"
                    value={fields.capital}
                    onChange={e =>
                      handleChangeField('capital', e.currentTarget.value)
                    }
                  />
                </Column>
                <Column>
                  <FileUpload
                    placeholder="Ex: doc.jpeg ou doc.pdf, máx. 5Mb"
                    acceptTypes=".jpeg, .jpg, .png, .pdf"
                    limitSize={5}
                    capture="user"
                    onFileUploaded={e =>
                      handleChangeField('image', URL.createObjectURL(e))
                    }
                  />
                </Column>

                <Column>
                  <Row>
                    <If condition={currentCountry?.lang}>
                      <Typography isBold>Língua:</Typography>
                      <InputText
                        fieldName="lang"
                        value={fields.lang}
                        onChange={e =>
                          handleChangeField('lang', e.currentTarget.value)
                        }
                      />
                    </If>

                    <If condition={currentCountry?.population}>
                      <Typography isBold>População:</Typography>
                      <InputText
                        fieldName="population"
                        placeholder={currentCountry?.population.toString()}
                        disabled
                      />
                    </If>
                  </Row>
                </Column>
                <Column>
                  <Row>
                    <If condition={currentCountry?.topLevelDomain}>
                      <Typography isBold>Top-level Domain:</Typography>
                      <InputText
                        fieldName="top-level-domain"
                        value={fields.topLevelDomain}
                        onChange={e =>
                          handleChangeField(
                            'topLevelDomain',
                            e.currentTarget.value
                          )
                        }
                      />
                    </If>
                    <If condition={currentCountry?.area}>
                      <Typography isBold>Área:</Typography>
                      <InputText
                        fieldName="area"
                        placeholder={currentCountry?.area.toString()}
                        disabled
                      />
                    </If>
                  </Row>
                </Column>
              </FlexContent>
              <Choose>
                <When condition={isEditedCountry}>
                  <Button type="submit" modifier="secondary" hasShadow={false}>
                    Salvar alterações
                  </Button>
                </When>
                <Otherwise>
                  <Button type="button" modifier="ghost" hasShadow={false}>
                    Salvar alterações
                  </Button>
                </Otherwise>
              </Choose>
            </form>
          </Otherwise>
        </Choose>
      </Wrap>
    </Container>
  )
}

const MemoizedEdit = memo(Edit)

MemoizedEdit.displayName = 'EditPage'

export default MemoizedEdit
