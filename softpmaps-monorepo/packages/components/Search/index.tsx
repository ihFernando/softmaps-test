import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  ChangeEvent,
  memo
} from 'react'

import { InputText } from '@softmaps/components'
import Typography from '@softmaps/components/Typography'
import Button from '@softmaps/components/Button'
import { getRecentlySearched } from '@softmaps/utils/recentlySearched'

import { ISearch } from './models'

import { Cover, WrapInput, ResultsContent, Row, SubmitButton } from './styled'

const Search: React.FC<ISearch> = ({ title, onSubmit }: ISearch) => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('Escolha um país')
  const [isSearching, setIsSearching] = useState(false)
  const [recentlySearched, setRecentlySearched] = useState([])

  useEffect(() => setRecentlySearched(getRecentlySearched()), [isSearching])

  useEffect(
    () =>
      inputValue.length <= 3
        ? setErrorMessage('Escolhe um país com 3 ou mais caracteres')
        : setErrorMessage('Escolha um país'),
    [inputValue]
  )

  const handleOnSearching = useCallback(
    (isSearchingState: boolean) => {
      setIsSearching(isSearchingState)
    },
    [setIsSearching]
  )

  const handlePressKey = e => {
    if (e.keyCode === 13) {
      e.preventDefault()
      handleOnSearching(false)
      handleSubmit(inputValue)
    }
  }

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
    },
    [setInputValue]
  )

  const handleSubmit = (value: string) => {
    if (value && value.length >= 3) {
      onSubmit(value)
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    Boolean(inputValue) && setError(false)
  }, [inputValue])

  const handleClickRecentlyResarched = (name: string) => {
    setInputValue(name)
    handleSubmit(name)
  }

  const renderListOfSearched = useMemo(
    () => (
      <ul>
        {recentlySearched.map((item, idx) => (
          <Row key={idx}>
            <button
              type="button"
              onClick={() => handleClickRecentlyResarched(item)}
            >
              <Typography color="dark-medium">{item}</Typography>
            </button>
          </Row>
        ))}
      </ul>
    ),
    [recentlySearched]
  )

  return (
    <>
      <Cover show={isSearching} />
      <WrapInput>
        <Typography size="body-g" isBold>
          {title}
        </Typography>
        <InputText
          fieldName="search"
          placeholder="Procure um país..."
          autoComplete="off"
          pattern="[A-Za-z]{3}"
          onFocus={() => handleOnSearching(true)}
          onBlur={() => handleOnSearching(false)}
          onChange={e => handleChange(e)}
          onKeyUp={e => handlePressKey(e)}
          isError={error}
          errorMessage={errorMessage}
        />
        <SubmitButton>
          <Button
            onClick={() => handleSubmit(inputValue)}
            modifier="primary"
            hasShadow={false}
          >
            Procurar
          </Button>
        </SubmitButton>
        <ResultsContent show={isSearching}>
          <Typography color="dark-medium" isBold>
            Buscas recentes:
          </Typography>
          <br />

          <Choose>
            <When condition={!recentlySearched.length}>
              <Typography color="dark-medium">
                Nenhum país procurado.
              </Typography>
            </When>
            <Otherwise>{renderListOfSearched}</Otherwise>
          </Choose>
        </ResultsContent>
      </WrapInput>
    </>
  )
}

const MemoizedSearch = memo(Search)

MemoizedSearch.displayName = 'Search'

export default MemoizedSearch
