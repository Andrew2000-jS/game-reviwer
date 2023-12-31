import { Details, CreatorRepository } from '../domain'

export interface GetCreator {
  (
    repository: CreatorRepository,
    id: number,
    signal?: AbortSignal
  ): Promise<Details>
}

export const getCreator: GetCreator = async (repository, id, signal) =>
  await repository.getCreator(id, signal)
