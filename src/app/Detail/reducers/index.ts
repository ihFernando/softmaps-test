import { Reducer } from 'redux'
import { DetailState, DetailTypes } from '../types'
import { TCountries, TNewCountry } from '@softmaps/types/Country'

const INITIAL_STATE: DetailState = {
  data: {
    allDetails: [],
    currentDetail: null,
    editedCountries: {
      codes: [],
      countries: []
    }
  },
  loading: true,
  error: false
}

const processDetail = ({
  state,
  countries
}: {
  state: DetailState['data']
  countries: TCountries
}) => {
  const currentCountries = []
  countries.map(
    ({
      alpha3Code,
      capital,
      translations,
      flag,
      numericCode,
      population,
      languages,
      area,
      topLevelDomain,
      latlng
    }) => {
      const isNotNewCountry = !state.allDetails.filter(
        ({ code }) => code === alpha3Code
      ).length
      if (isNotNewCountry) {
        currentCountries.push({
          code: alpha3Code,
          label: capital,
          title: translations.pt,
          image: flag,
          numericCode,
          capital,
          population: population && population.toLocaleString('pt-BR'),
          lang: languages[0].nativeName,
          area: area && area.toLocaleString('pt-BR'),
          topLevelDomain,
          latlng
        })
      }

      return null
    }
  )

  return {
    allDetails: [...state.allDetails, ...currentCountries],
    currentDetail: currentCountries[0]
  }
}

const processEdit = ({
  state,
  editedCountry
}: {
  state: DetailState['data']
  editedCountry: TNewCountry
}) => {
  const { editedCountries, allDetails } = state
  const newCodes = []
  const newCountries = []
  const hasCountries = editedCountries && editedCountries?.countries
  const hasCurrentCodeInCodes =
    editedCountries && editedCountries?.codes.includes(editedCountry.code)
  const hasStateCodes = editedCountries && editedCountries?.codes

  if (hasStateCodes) {
    newCodes.push(...editedCountries.codes)
  }
  if (!hasCurrentCodeInCodes) {
    newCodes.push(editedCountry.code)
  }

  if (hasCountries) {
    newCountries.push(
      ...editedCountries.countries.filter(
        ({ code }) => code !== editedCountry.code
      )
    )
  }

  newCountries.push(editedCountry)

  const updateAllDetails = () => {
    const listOfNotCurrentCountry = []

    listOfNotCurrentCountry.push(
      allDetails.filter(({ code }) => code !== editedCountry.code)
    )

    return [...listOfNotCurrentCountry, editedCountry]
  }

  return {
    ...state,
    allDetails: updateAllDetails(),
    currentDetail: newCountries[0],
    editedCountries: {
      codes: newCodes,
      countries: newCountries
    }
  }
}

const reducer: Reducer<DetailState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DetailTypes.DETAIL_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case DetailTypes.DETAIL_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          ...processDetail({
            state: state.data,
            countries: action.payload.data
          })
        },
        loading: false,
        error: false
      }
    }
    case DetailTypes.DETAIL_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      }
    }
    case DetailTypes.CHANGE_CURRENT_DETAIL: {
      return {
        ...state,
        data: {
          ...state.data,
          currentDetail: {
            ...state.data.allDetails.filter(
              ({ code }) => code === action.payload
            )[0]
          }
        },
        loading: false,
        error: false
      }
    }
    case DetailTypes.DETAIL_EDIT: {
      return {
        ...state,
        data: {
          ...state.data,
          currentDetail: action.payload,
          ...processEdit({
            state: state.data,
            editedCountry: action.payload
          })
        },
        loading: false,
        error: false
      }
    }
    default:
      return state
  }
}

export default reducer
