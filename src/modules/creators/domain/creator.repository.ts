import { RootCreator, Detail } from './creator.entity'

export interface CreatorRepository {
  getCreators: (pageSize: number, signal?: AbortSignal) => Promise<RootCreator>
  getCreator: (id: number, signal?: AbortSignal) => Promise<Detail>
}
