import { Genres, Game } from './game.entity'

export interface GameRepository {
  getGames: (signal?: AbortSignal) => Promise<Game>
  getGenres: (signal?: AbortSignal) => Promise<Genres>
}
