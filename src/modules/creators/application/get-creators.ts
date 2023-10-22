import { RootCreator, CreatorRepository } from '../domain'

export interface GetCreators {
  (repository: CreatorRepository, signal?: AbortSignal): Promise<RootCreator>
}

export const getCreators: GetCreators = async (repository, signal) =>
  await repository.getCreators(signal)
