import { Detail, GameRepository } from '../domain'

export interface GetGame {
  (
    repository: GameRepository,
    id: number,
    signal?: AbortSignal
  ): Promise<Detail>
}

export const getGame: GetGame = async (repository, id, signal) =>
  await repository.getGame(id, signal)
