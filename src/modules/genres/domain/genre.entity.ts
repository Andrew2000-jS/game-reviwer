export type RootGenres = {
  count: number
  next: string
  previous: string
  results: Genres[]
}

export type Genres = {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

export type Detail = Genres & {
  description: string
}
