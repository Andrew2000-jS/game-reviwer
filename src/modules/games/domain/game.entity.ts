export type Game = {
  count: number
  next: string
  previous: string
  results: ResultGames[]
}

export type Genres = {
  count: number
  next: string
  previous: string
  results: ResultGenres[]
}

export type ResultGames = {
  id: number
  slug: string
  name: string
  released: string
  tba: boolean
  background_image: string
  rating: number
  rating_top: number
  ratings: any[]
  ratings_count: number
  reviews_text_count: string
  added: number
  added_by_status: any
  metacritic: number
  playtime: number
  suggestions_count: number
  updated: string
  esrb_rating: Esrbrating
  platforms: Platform[]
  short_screenshots: ScreenShot[]
}

type ResultGenres = {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

type Platform = {
  platform: Esrbrating
  released_at: string
  requirements: Requirements
}

type Requirements = {
  minimum: string
  recommended: string
}

type Esrbrating = {
  id: number
  slug: string
  name: string
}

type ScreenShot = {
  id: number
  image: string
}
