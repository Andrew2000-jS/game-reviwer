import { RootCreator, Details } from './creator.entity'

export interface CreatorRepository {
  getCreators: (signal?: AbortSignal) => Promise<RootCreator>
  getCreator: (id: number, signal?: AbortSignal) => Promise<Details>
}
