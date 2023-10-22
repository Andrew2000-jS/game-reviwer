import { PusblisherRepository } from '../domain'

const getPublishers = async (signal?: AbortSignal) => {
  const apiUrl = 'https://api.rawg.io/api/publishers'
  const url = `${apiUrl}?key=${process.env.API_KEY}&page_size=3`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

export const pusblisherRepository = (): PusblisherRepository => {
  return {
    getPublishers
  }
}
