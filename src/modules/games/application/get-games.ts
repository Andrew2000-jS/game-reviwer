import { RootGame, GameRepository } from '../domain'

export interface GetGames {
  (repository: GameRepository, pageSize: number, signal?: AbortSignal): Promise<RootGame>
}

export const getGames: GetGames = async (repository, pageSize, signal) =>
  await repository.getGames(pageSize, signal)
