import { GameDetails, RootGame, RootGenres } from './game.entity'

export interface GameRepository {
  getGames: (signal?: AbortSignal) => Promise<RootGame>
  getGame: (id: number, signal?: AbortSignal) => Promise<GameDetails>
  getGenres: (signal?: AbortSignal) => Promise<RootGenres>
}
