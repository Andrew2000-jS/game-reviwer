export type RootStore = {
  count: number
  next: string
  previous: string
  results: Store[]
}

export type Store = {
  id: number
  name: string
  domain: string
  slug: string
  games_count: number
  image_background: string
}

export type Detail = Store & { description: string }
