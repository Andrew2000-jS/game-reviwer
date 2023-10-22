import { CreatorRepository } from '../domain'

const getCreators = async (signal?: AbortSignal) => {
  const apiUrl = 'https://api.rawg.io/api/creators'
  const url = `${apiUrl}?key=${process.env.API_KEY}&page_size=7`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

const getCreator = async (id: number, signal?: AbortSignal) => {
  const apiUrl = `https://api.rawg.io/api/creators/${id}`
  const url = `${apiUrl}?key=${process.env.API_KEY}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

export const creatorRepository = (): CreatorRepository => {
  return {
    getCreators,
    getCreator
  }
}
