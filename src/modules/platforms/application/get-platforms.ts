import { PlatformRepository, RootPlatform } from '../domain'

interface GetPlatforms {
  (repository: PlatformRepository, pageSize: number, signal?: AbortSignal): Promise<RootPlatform>
}

export const getPlatforms: GetPlatforms = async (repository, pageSize, signal) => await repository.getPlatforms(pageSize, signal)
