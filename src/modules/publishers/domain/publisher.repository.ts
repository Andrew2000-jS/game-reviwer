import { RootPusblisher } from './publisher.entity'

export interface PusblisherRepository {
  getPublishers: (signal?: AbortSignal) => Promise<RootPusblisher>
}
