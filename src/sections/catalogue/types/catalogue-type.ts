import { RootCreator } from '@/modules/creators/domain'
import { RootGame } from '@/modules/games/domain'
import { RootGenres } from '@/modules/genres/domain'
import { RootPlatform } from '@/modules/platforms/domain'
import { RootPusblisher } from '@/modules/publishers/domain'
import { RootStore } from '@/modules/stores/domain'
import { RefObject } from 'react'

export interface MiddleInterface {
  slide: (shift: number) => void
  scrollCheck: () => void
  scrollEnd: boolean
  scrollX: number
  scrollRef: RefObject<HTMLDivElement>
  games: any
  publishers: any
}

export interface BottomInterface {
  genres: any
  stores: any
  creators: any
  platforms: any
  loaders: boolean[]
}

export type MiddleGameType = Omit<MiddleInterface, | 'publishers'> & { loading: boolean }
export type MiddlePublisherType = Pick<MiddleInterface, | 'publishers'> & { loading: boolean }

export type ListType<T> = {
  data: T[]
  loading: boolean
}

export interface ListInterface {
  games: ListType<RootGame>
  publishers: ListType<RootPusblisher>
  stores: ListType<RootStore>
  genres: ListType<RootGenres>
  creators: ListType<RootCreator>
  platforms: ListType<RootPlatform>
}
