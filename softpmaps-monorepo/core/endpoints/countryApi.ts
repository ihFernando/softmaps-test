import api from './api'

export const getCountryApi = async (countryName: string) => {
  const response = await api.get(`/name/${countryName}`)

  return response
}

export const getCoyntryByAlphaCodeApi = async (alphaCode: string) => {
  const response = await api.get(`/alpha?codes=${alphaCode}`)

  return response
}
