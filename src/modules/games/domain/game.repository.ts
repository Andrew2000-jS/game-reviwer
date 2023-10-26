import { GameDetails, RootGame, RootGenres } from './game.entity'

export interface GameRepository {
  getGames: (pageSize: number, signal?: AbortSignal) => Promise<RootGame>
  getGame: (id: number, signal?: AbortSignal) => Promise<GameDetails>
  getGenres: (pageSize: number, signal?: AbortSignal) => Promise<RootGenres>
}
