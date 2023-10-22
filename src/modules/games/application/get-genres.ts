import { RootGenres, GameRepository } from '../domain'

export interface GetGenres {
  (repository: GameRepository, signal?: AbortSignal): Promise<RootGenres>
}

export const getGenres: GetGenres = async (repository, signal) =>
  await repository.getGenres(signal)
