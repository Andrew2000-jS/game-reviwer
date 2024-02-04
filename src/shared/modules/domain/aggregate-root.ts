export type AggregateRoot<T> = {
  count: number
  next: string
  previous: string
  results: T[]
}
