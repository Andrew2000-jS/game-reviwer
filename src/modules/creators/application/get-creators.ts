import { Creator, CreatorRepository } from '../domain'

export interface GetCreators {
  (repository: CreatorRepository, signal?: AbortSignal): Promise<Creator[]>
}

export const getCreators: GetCreators = async (repository, signal) =>
  await repository.getCreators(signal)
