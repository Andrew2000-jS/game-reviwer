import { Detail, RootGame } from './game.entity'

export interface GameRepository {
  getGames: (pageSize: number, signal?: AbortSignal) => Promise<RootGame>
  getGame: (id: number, signal?: AbortSignal) => Promise<Detail>
}

export interface GamesFilter {
  getByGenre: (
    pageSize: number,
    genre: string,
    signal?: AbortSignal
  ) => Promise<RootGame>
}
