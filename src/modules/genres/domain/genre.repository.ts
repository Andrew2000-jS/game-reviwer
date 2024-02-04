import { Detail, RootGenre } from './genre.entity'

export interface GenreRepository {
  getGenres: (pageSize: number, signal?: AbortSignal) => Promise<RootGenre>
  getGenre: (id: number, signal?: AbortSignal) => Promise<Detail>
}
