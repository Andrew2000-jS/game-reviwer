import { RootCreator, CreatorRepository } from '../domain'

export interface GetCreators {
  (repository: CreatorRepository, pageSize: number, signal?: AbortSignal): Promise<RootCreator>
}

export const getCreators: GetCreators = async (repository, pageSize, signal) =>
  await repository.getCreators(pageSize, signal)
