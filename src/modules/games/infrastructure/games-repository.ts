import { GameRepository } from '../domain'

const getGames = async (pageSize: number, signal?: AbortSignal) => {
  const apiUrl = 'https://api.rawg.io/api/games'
  const url = `${apiUrl}?key=${process.env.API_KEY}&page_size=${pageSize}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

const getGame = async (id: number, signal?: AbortSignal) => {
  const apiUrl = `https://api.rawg.io/api/games/${id}`
  const url = `${apiUrl}?key=${process.env.API_KEY}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

const getGenres = async (pageSize: number, signal?: AbortSignal) => {
  const apiUrl = 'https://api.rawg.io/api/genres'
  const url = `${apiUrl}?key=${process.env.API_KEY}&page_size=${pageSize}`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

export const gameRepository = (): GameRepository => {
  return {
    getGames,
    getGenres,
    getGame
  }
}
