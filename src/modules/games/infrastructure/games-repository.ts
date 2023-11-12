import { config } from '@/shared/config'
import { GameRepository, GamesFilter } from '../domain'

const getGames = async (pageSize: number, signal?: AbortSignal) => {
  const url = `${config.BASE_URL}/games?key=${process.env.API_KEY}&page_size=${pageSize}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

const getGame = async (id: number, signal?: AbortSignal) => {
  const url = `${config.BASE_URL}/games/${id}?key=${process.env.API_KEY}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

const getByGenre = async (pageSize: number, genre: string, signal?: AbortSignal) => {
  const url = `${config.BASE_URL}/games?key=${process.env.API_KEY}&page_size=${pageSize}&genre=${genre}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

export const gameRepository = (): GameRepository => {
  return {
    getGames,
    getGame
  }
}

export const gameFilterRepository = (): GamesFilter => {
  return {
    getByGenre
  }
}
