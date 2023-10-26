import { RootPusblisher, PusblisherRepository } from '../domain'

interface GetPublishers {
  (
    repository: PusblisherRepository,
    pageSize: number,
    signal?: AbortSignal
  ): Promise<RootPusblisher>
}

export const getPublishers: GetPublishers = async (repository, pageSize, signal) =>
  await repository.getPublishers(pageSize, signal)
