'use client'

import { useParams } from 'next/navigation'
import { getGame } from '@/modules/games/application'
import { gameRepository } from '@/modules/games/infrastructure'
import { GamesDetailView } from '@/sections/detail/views'
import { useEffect, useState } from 'react'
import { GameDetails } from '@/modules/games/domain'

function GamesDetailPage () {
  const [game, setGame] = useState<GameDetails | null>(null)
  const { id } = useParams()
  const repository = gameRepository()

  useEffect(() => {
    getGame(repository, Number(id)).then(res => setGame(res))
  }, [])

  return (
    <main className='w-full'>
      <GamesDetailView game={game}/>
    </main>
  )
}

export default GamesDetailPage
