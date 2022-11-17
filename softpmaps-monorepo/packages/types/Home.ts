import { TNewCountry } from './Country'

export type THome = {
  data: {
    lastFiveCountries: TNewCountry[]
    currentCountries: TNewCountry[]
    recentlyCountries: string[]
  }
}
