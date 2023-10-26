import { RootCreator, Details } from './creator.entity'

export interface CreatorRepository {
  getCreators: (pageSize: number, signal?: AbortSignal) => Promise<RootCreator>
  getCreator: (id: number, signal?: AbortSignal) => Promise<Details>
}
