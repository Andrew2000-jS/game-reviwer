import { Game, GameRepository } from '../domain'

export interface GetGames {
  (repository: GameRepository, signal?: AbortSignal): Promise<Game>
}

export const getGames: GetGames = async (repository, signal) =>
  await repository.getGames(signal)
