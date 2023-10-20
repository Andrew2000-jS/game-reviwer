import { Creator, Details } from './creator.entity'

export interface CreatorRepository {
  getCreators: (signal?: AbortSignal) => Promise<Creator[]>
  getCreator: (id: number, signal?: AbortSignal) => Promise<Details>
}
