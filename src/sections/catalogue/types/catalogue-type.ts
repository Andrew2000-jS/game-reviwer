import { Creator, RootCreator } from '@/modules/creators/domain'
import { RootGame } from '@/modules/games/domain'
import { Genre, RootGenre } from '@/modules/genres/domain'
import { Platform, RootPlatform } from '@/modules/platforms/domain'
import { RootPusblisher } from '@/modules/publishers/domain'
import { RootStore, Store } from '@/modules/stores/domain'
import { RefObject } from 'react'

export interface MiddleInterface {
  slide: (shift: number) => void
  scrollCheck: () => void
  scrollEnd: boolean
  scrollX: number
  scrollRef: RefObject<HTMLDivElement>
  games: ListType<RootGame>
  publishers: ListType<RootPusblisher>
}

export interface BottomInterface {
  genres: Genre
  stores: Store
  creators: Creator
  platforms: Platform
  loaders: boolean[]
}

export type MiddleGameType = Omit<MiddleInterface, | 'publishers'> & { loading: boolean }
export type MiddlePublisherType = Pick<MiddleInterface, | 'publishers'> & { loading: boolean }

export type ListType<T> = {
  data: T
  loading: boolean
}

export interface ListInterface {
  games: ListType<RootGame>
  publishers: ListType<RootPusblisher>
  stores: ListType<RootStore>
  genres: ListType<RootGenre>
  creators: ListType<RootCreator>
  platforms: ListType<RootPlatform>
}
