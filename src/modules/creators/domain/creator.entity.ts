export type RootCreator = {
  count: number
  next: string
  previous: string
  results: Creator[]
}

export type Creator = {
  id: string
  name: string
  slug: string
  image: string
  image_background: string
  games_count: number
}

export type Details = {
  id: number
  name: string
  slug: string
  image: string
  image_background: string
  description: string
  games_count: number
  reviews_count: number
  rating: string
  rating_top: number
  updated: string
}
