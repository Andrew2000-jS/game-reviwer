import { GenreRepository, Detail } from '../domain'

export interface GetGenre {
  (repository: GenreRepository, id: number, signal?: AbortSignal): Promise<Detail>
}

export const getGenre: GetGenre = async (repository, id, signal) =>
  await repository.getGenre(id, signal)
