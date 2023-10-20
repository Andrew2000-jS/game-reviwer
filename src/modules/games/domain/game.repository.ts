import { Genres, Game, GameDetails } from './game.entity'

export interface GameRepository {
  getGames: (signal?: AbortSignal) => Promise<Game>
  getGame: (id: number, signal?: AbortSignal) => Promise<GameDetails>
  getGenres: (signal?: AbortSignal) => Promise<Genres>
}
