import { GameDetails, GameRepository } from '../domain'

export interface GetGame {
  (
    repository: GameRepository,
    id: number,
    signal?: AbortSignal
  ): Promise<GameDetails>
}

export const getGame: GetGame = async (repository, id, signal) =>
  await repository.getGame(id, signal)
