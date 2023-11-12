import { RootGame, GamesFilter } from '../domain'

export interface GetGamesByFilter {
  (
    repository: GamesFilter,
    pageSize: number,
    genre: string,
    signal?: AbortSignal
  ): Promise<RootGame>
}

export const getGamesByFilter: GetGamesByFilter = async (repository, pageSize, genre, signal) =>
  await repository.getByGenre(pageSize, genre, signal)
