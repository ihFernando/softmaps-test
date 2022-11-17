export const setLocalStorage = (key: string, value: any) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    throw new Error('Não foi possível escrever em localStorage')
  }
}

export const getLocalStorage = (key: string) => {
  try {
    const item = JSON.parse(window.localStorage.getItem(key))
    return item
  } catch (error) {
    throw new Error('Não foi possível ler item em localStorage')
  }
}

export const removeLocalStorage = (key: string) => {
  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    throw new Error('Não foi possível remover o item em localStorage')
  }
}

export default { setLocalStorage, getLocalStorage, removeLocalStorage }
