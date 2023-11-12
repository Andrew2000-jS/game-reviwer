import { config } from '@/shared/config'
import { PlatformRepository } from '../domain'

const getPlatforms = async (pageSize: number, signal?: AbortSignal) => {
  const url = `${config.BASE_URL}/platforms?key=${process.env.API_KEY}&page_size=${pageSize}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

const getPlatform = async (id: number, signal?: AbortSignal) => {
  const url = `${config.BASE_URL}/platforms/${id}?key=${process.env.API_KEY}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

export const platformRepository = (): PlatformRepository => {
  return {
    getPlatforms,
    getPlatform
  }
}
