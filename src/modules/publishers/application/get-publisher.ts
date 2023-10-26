import { PusblisherRepository, Detail } from '../domain'

interface GetPublisher {
  (
    repository: PusblisherRepository,
    id: number,
    signal?: AbortSignal
  ): Promise<Detail>
}

export const getPublisher: GetPublisher = async (repository, id, signal) =>
  await repository.getPublisher(id, signal)
