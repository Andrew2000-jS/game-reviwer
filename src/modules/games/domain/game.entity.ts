export type RootGame = {
  count: number
  next: string
  previous: string
  results: Game[]
}

export type Game = {
  id: number
  slug: string
  name: string
  released: string
  tba: boolean
  background_image: string
  rating: number
  rating_top: number
  ratings: Ratings[]
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

export type Detail = Game & {
  name_original: string
  description: string
  description_raw: string
  metacritic: number
  metacritic_platforms: MetacriticPlatform[]
  background_image_additional: string
  website: string
  reactions: any
  screenshots_count: number
  movies_count: number
  creators_count: number
  achievements_count: number
  parent_achievements_count: string
  reddit_url: string
  reddit_name: string
  reddit_description: string
  reddit_logo: string
  reddit_count: number
  twitch_count: string
  youtube_count: string
  ratings_count: number
  suggestions_count: number
  alternative_names: string[]
  metacritic_url: string
  parents_count: number
  additions_count: number
  game_series_count: number
  parent_platforms: ParentPlatforms[]
  developers: Developers[]
  tags: Tags[]
}

type Developers = {
  id: number
  games_count: number
  image_background: string
  name: string
  slug: string
}

type Platform = {
  platform: Esrbrating
  released_at: string
  requirements: Requirements
}

type ParentPlatforms = {
  platform: Esrbrating
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

type MetacriticPlatform = {
  metascore: number
  url: string
}

type Ratings = {
  id: number
  count: number
  percent: number
  title: string
}

type Tags = {
  id: number
  image_background: string
  language: string
  name: string
  slug: string
}
