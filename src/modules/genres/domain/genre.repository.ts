import { Detail, RootGenres } from './genre.entity'

export interface GenreRepository {
  getGenres: (pageSize: number, signal?: AbortSignal) => Promise<RootGenres>
  getGenre: (id: number, signal?: AbortSignal) => Promise<Detail>
}
