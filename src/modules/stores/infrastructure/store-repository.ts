import { config } from '@/shared/config'
import { StoreRepository } from '../domain'

const getStores = async (pageSize: number, signal?: AbortSignal) => {
  const url = `${config.BASE_URL}/stores?key=${process.env.API_KEY}&page_size=${pageSize}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

const getStore = async (id: number, signal?: AbortSignal) => {
  const url = `${config.BASE_URL}/stores/${id}?key=${process.env.API_KEY}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

export const storeRepository = (): StoreRepository => {
  return {
    getStore,
    getStores
  }
}
