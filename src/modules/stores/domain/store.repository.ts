import { RootStore, Detail } from '.'

export interface StoreRepository {
  getStores: (pageSize: number, signal?: AbortSignal) => Promise<RootStore>
  getStore: (id: number, signal?: AbortSignal) => Promise<Detail>
}
