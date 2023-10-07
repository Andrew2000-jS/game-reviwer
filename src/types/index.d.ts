interface RootGames {
  count: number
  next: string
  previous: string
  results: ResultGames[]
}

interface RootGenres {
  count: number
  next: string
  previous: string
  results: ResultGenres[]
}

interface ResultGames {
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
  added_by_status: Ratings
  metacritic: number
  playtime: number
  suggestions_count: number
  updated: string
  esrb_rating: Esrbrating
  platforms: Platform[]
  short_screenshots: ScreenShot[]
}

interface ResultGenres {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

interface Platform {
  platform: Esrbrating
  released_at: string
  requirements: Requirements
}

interface Requirements {
  minimum: string
  recommended: string
}

interface Esrbrating {
  id: number
  slug: string
  name: string
}

interface ScreenShot {
  id: number
  image: string
}

// interface Ratings {
// }
