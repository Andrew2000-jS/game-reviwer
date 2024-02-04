import { AggregateRoot } from '@/shared'

export type RootStore = AggregateRoot<Store>

export type Store = {
  id: number
  name: string
  domain: string
  slug: string
  games_count: number
  image_background: string
}

export type Detail = Store & { description: string }
