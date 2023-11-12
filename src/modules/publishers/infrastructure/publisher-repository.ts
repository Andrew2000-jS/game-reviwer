import { config } from '@/shared/config'
import { PusblisherRepository } from '../domain'

const getPublishers = async (pageSize: number, signal?: AbortSignal) => {
  const url = `${config.BASE_URL}/publishers?key=${process.env.API_KEY}&page_size=${pageSize}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

const getPublisher = async (id: number, signal?: AbortSignal) => {
  const url = `${config.BASE_URL}/publishers/${id}?key=${process.env.API_KEY}`
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
