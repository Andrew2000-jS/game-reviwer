import { RootPlatform, Detail } from './platform.entity'

export interface PlatformRepository {
  getPlatforms: (pageSize: number, signal?: AbortSignal) => Promise<RootPlatform>
  getPlatform: (id: number, signal?: AbortSignal) => Promise<Detail>
}
