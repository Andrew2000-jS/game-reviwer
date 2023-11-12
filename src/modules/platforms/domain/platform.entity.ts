export type RootPlatform = {
  count: number
  next: string
  previous: string
  results: Platform[]
}

export type Platform = {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
  image: string
  year_start: number
  year_end: number
}

export type Detail = Platform & { description: string }
