import { StoreRepository, RootStore } from '../domain'

interface GetStores {
  (repository: StoreRepository, pageSize: number, signal?: AbortSignal): Promise<RootStore>
}

export const getStores: GetStores = async (repository, pageSize, signal) => await repository.getStores(pageSize, signal)
