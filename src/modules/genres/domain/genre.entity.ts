import { AggregateRoot } from '@/shared'

export type RootGenre = AggregateRoot<Genre>

export type Genre = {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

export type Detail = Genre & {
  description: string
}
