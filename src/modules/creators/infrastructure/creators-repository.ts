import { config } from '@/shared/config'
import { CreatorRepository } from '../domain'

const getCreators = async (pageSize: number, signal?: AbortSignal) => {
  const url = `${config.BASE_URL}/creators?key=${process.env.API_KEY}&page_size=${pageSize}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

const getCreator = async (id: number, signal?: AbortSignal) => {
  const url = `${config.BASE_URL}/creators/${id}?key=${process.env.API_KEY}`
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
