import { RootGenre, GenreRepository } from '../domain'

export interface GetGenres {
  (repository: GenreRepository, pageSize: number, signal?: AbortSignal): Promise<RootGenre>
}

export const getGenres: GetGenres = async (repository, pageSize, signal) =>
  await repository.getGenres(pageSize, signal)
