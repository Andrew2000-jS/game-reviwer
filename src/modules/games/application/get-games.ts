import { RootGame, GameRepository } from '../domain'

export interface GetGames {
  (repository: GameRepository, signal?: AbortSignal): Promise<RootGame>
}

export const getGames: GetGames = async (repository, signal) =>
  await repository.getGames(signal)
