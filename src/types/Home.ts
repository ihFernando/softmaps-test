import { TNewCountry } from '@softmaps/types/Country'

export type THome = {
  data: {
    lastFiveCountries: TNewCountry[]
    currentCountries: TNewCountry[]
    recentlyCountries: string[]
  }
}
