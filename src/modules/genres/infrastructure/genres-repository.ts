import { config } from '@/shared/config'
import { GenreRepository } from '../domain'

const getGenres = async (pageSize: number, signal?: AbortSignal) => {
  const url = `${config.BASE_URL}/genres?key=${process.env.API_KEY}&page_size=${pageSize}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

const getGenre = async (id: number, signal?: AbortSignal) => {
  const url = `${config.BASE_URL}/genres/${id}?key=${process.env.API_KEY}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

export const genresRepository = (): GenreRepository => {
  return {
    getGenres,
    getGenre
  }
}
