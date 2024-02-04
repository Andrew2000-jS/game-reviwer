import { AggregateRoot } from '@/shared'

export type RootPusblisher = AggregateRoot<Pusblisher>

export type Pusblisher = {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

export type Detail = {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
  description: string
}
