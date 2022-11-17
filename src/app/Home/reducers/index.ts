import { Reducer } from 'redux'
import { HomeState, HomeTypes } from '../types'
import { TCountries, TNewCountry } from '@softmaps/types/Country'

const INITIAL_STATE: HomeState = {
  data: {
    lastFiveCountries: [],
    currentCountries: [],
    recentlyCountries: []
  },
  loading: false,
  error: false
}

const processData = ({
  state,
  countries
}: {
  state: HomeState['data']
  countries: TCountries
}) => {
  const currentCountries = []
  const recentlyCountries = []
  let lastFiveCountries = []

  countries.map(country => {
    currentCountries.push({
      code: country.alpha3Code,
      label: country.capital,
      title: country.translations.pt,
      image: country.flag,
      numericCode: country.numericCode
    })

    if (!state.recentlyCountries.includes(country.alpha3Code)) {
      recentlyCountries.push(country.alpha3Code)
    }

    return null
  })

  const hasCurrentCoutriesInLastCountries = Boolean(
    state.lastFiveCountries.filter(({ code: lcCode }) =>
      currentCountries.some(({ code: ccCode }) => lcCode === ccCode)
    ).length
  )

  if (hasCurrentCoutriesInLastCountries) {
    lastFiveCountries = state.lastFiveCountries
  } else {
    lastFiveCountries = [
      ...currentCountries,
      ...state.lastFiveCountries
    ].splice(0, 5)
  }

  return {
    currentCountries,
    recentlyCountries: [...state.recentlyCountries, ...recentlyCountries],
    lastFiveCountries
  }
}

const processLastFiveCountries = ({
  state,
  editedCountry
}: {
  state: HomeState['data']['lastFiveCountries']
  editedCountry: TNewCountry
}) => {
  const listOfIsNotCurrentCountry = []
  if (state.length) {
    listOfIsNotCurrentCountry.push(
      ...state.filter(({ code }) => code !== editedCountry.code)
    )
  }

  listOfIsNotCurrentCountry.push(editedCountry)

  return listOfIsNotCurrentCountry
}

const reducer: Reducer<HomeState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeTypes.COUNTRY_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case HomeTypes.COUNTRY_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          ...processData({ state: state.data, countries: action.payload.data })
        },
        loading: false,
        error: false
      }
    }
    case HomeTypes.COUNTRY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      }
    }
    case HomeTypes.COUNTRY_EDIT_LAST_SEARCHED: {
      return {
        ...state,
        data: {
          ...state.data,
          lastFiveCountries: processLastFiveCountries({
            state: state.data.lastFiveCountries,
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
