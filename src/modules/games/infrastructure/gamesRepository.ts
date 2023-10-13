import { GameRepository } from '../domain'

const getGames = async (signal?: AbortSignal) => {
  const apiUrl = 'https://api.rawg.io/api/games'
  const url = `${apiUrl}?key=${process.env.API_KEY}&page_size=4`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

const getGenres = async (signal?: AbortSignal) => {
  const apiUrl = 'https://api.rawg.io/api/genres'
  const url = `${apiUrl}?key=${process.env.API_KEY}&page_size=6`
  const response = await fetch(url, { signal })
  const data = await response.json()
  return data
}

export const gameRepository = (): GameRepository => {
  return {
    getGames,
    getGenres
  }
}
