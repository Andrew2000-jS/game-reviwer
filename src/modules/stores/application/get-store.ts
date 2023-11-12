import { Detail, StoreRepository } from '../domain'

interface GetStore {
  (repository: StoreRepository, id: number, signal?: AbortSignal): Promise<Detail>
}

export const getStore: GetStore = async (repository, id, signal) => await repository.getStore(id, signal)
