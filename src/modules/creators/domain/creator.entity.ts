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
  positions: Positon[]
  platforms: Platforms
}

type Positon = {
  id: number
  name: string
  slug: string
}

type Platforms = {
  count: number
  results: Results[]
  total: number
}

type Results = {
  count: number
  percent: number
  platform: Platform
}

type Platform = {
  id: number
  name: string
  slug: string
}
