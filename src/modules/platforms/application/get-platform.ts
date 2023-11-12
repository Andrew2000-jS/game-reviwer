import { Detail, PlatformRepository } from '../domain'

interface GetPlatform {
  (repository: PlatformRepository, id: number, signal?: AbortSignal): Promise<Detail>
}

export const getPlatform: GetPlatform = async (repository, id, signal) => await repository.getPlatform(id, signal)
