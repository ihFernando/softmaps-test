export type TCountry = {
  alpha3Code: string
  population: number
  numericCode: number
  capital: string
  area: number
  latlng: string[]
  languages: {
    nativeName: string
  }[]
  topLevelDomain: string[]
  translations: {
    pt: string
  }
  flag: string
}

export type TCountries = TCountry[]

export type TNewCountry = {
  code: string
  label: string
  title: string
  image: string
  numericCode?: string
  capital?: string
  population?: number
  lang?: string
  area?: number
  topLevelDomain?: string[]
  latlng?: number[]
}
