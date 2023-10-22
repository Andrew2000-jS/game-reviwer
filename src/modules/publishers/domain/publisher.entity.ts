export interface RootPusblisher {
  count: number
  next: string
  previous: string
  results: Pusblisher[]
}

export type Pusblisher = {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}
