import { Genres, GameRepository } from '../domain'

export interface GetGenres {
  (repository: GameRepository, signal?: AbortSignal): Promise<Genres>
}

export const getGenres: GetGenres = async (repository, signal) =>
  await repository.getGenres(signal)
