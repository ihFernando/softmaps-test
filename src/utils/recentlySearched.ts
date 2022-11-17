import { getLocalStorage, setLocalStorage } from '@softmaps/utils/localStorage'

const CACHE_KEY = '@softmaps/COUNTRIES_SEARCHED'

const saveRecentlySearched = (country: string) => {
  let currentCountries = []
  const coutriesSearched = getLocalStorage(CACHE_KEY) || []
  const hasCurrentCountryInCache = coutriesSearched.includes(country)

  if (!hasCurrentCountryInCache) {
    currentCountries.push(country)
  }

  if (coutriesSearched) {
    currentCountries = [...coutriesSearched, ...currentCountries]
  }

  if (currentCountries.length > 5) {
    currentCountries.shift()
  }

  setLocalStorage(CACHE_KEY, currentCountries || [])
}

const getRecentlySearched = () => getLocalStorage(CACHE_KEY) || []

export { saveRecentlySearched, getRecentlySearched }
