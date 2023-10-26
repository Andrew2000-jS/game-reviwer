import { PusblisherRepository } from '../domain'

const getPublishers = async (pageSize: number, signal?: AbortSignal) => {
  const apiUrl = 'https://api.rawg.io/api/publishers'
  const url = `${apiUrl}?key=${process.env.API_KEY}&page_size=${pageSize}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

const getPublisher = async (id: number, signal?: AbortSignal) => {
  const apiUrl = `https://api.rawg.io/api/publishers/${id}`
  const url = `${apiUrl}?key=${process.env.API_KEY}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

export const pusblisherRepository = (): PusblisherRepository => {
  return {
    getPublishers,
    getPublisher
  }
}
