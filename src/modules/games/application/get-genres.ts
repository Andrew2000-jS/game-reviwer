import { RootGenres, GameRepository } from '../domain'

export interface GetGenres {
  (repository: GameRepository, pageSize: number, signal?: AbortSignal): Promise<RootGenres>
}

export const getGenres: GetGenres = async (repository, pageSize, signal) =>
  await repository.getGenres(pageSize, signal)
