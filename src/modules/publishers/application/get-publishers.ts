import { RootPusblisher, PusblisherRepository } from '../domain'

interface GetPublishers {
  (
    repository: PusblisherRepository,
    signal?: AbortSignal
  ): Promise<RootPusblisher>
}

export const getPublishers: GetPublishers = async (repository, signal) =>
  await repository.getPublishers(signal)
