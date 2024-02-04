'use client'

import Games from './games'
import Publishers from './publishers'
import { MiddleInterface } from '../../types'

function Middle ({
  slide,
  scrollEnd,
  scrollRef,
  scrollX,
  scrollCheck,
  games,
  publishers
}: MiddleInterface) {
  return (
    <>
      <Games
        games={games}
        slide={slide}
        scrollCheck={scrollCheck}
        scrollEnd={scrollEnd}
        scrollRef={scrollRef}
        scrollX={scrollX}
        loading={games.loading}
      />
      <Publishers
        publishers={publishers}
        loading={publishers.loading}
      />
    </>
  )
}

export default Middle
