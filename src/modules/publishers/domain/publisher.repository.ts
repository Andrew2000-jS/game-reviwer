import { RootPusblisher, Detail } from './publisher.entity'

export interface PusblisherRepository {
  getPublishers: (pageSize: number, signal?: AbortSignal) => Promise<RootPusblisher>
  getPublisher: (id: number, signal?: AbortSignal) => Promise<Detail>
}
