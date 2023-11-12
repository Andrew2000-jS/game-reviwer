import { Home } from '@/sections'

import { getGames } from '@/modules/games/application'
import { gameRepository } from '@/modules/games/infrastructure'

import { genresRepository } from '@/modules/genres/infrastructure'
import { getGenres } from '@/modules/genres/application'

async function HomePage () {
  const gameRepo = gameRepository()
  const genreRepo = genresRepository()

  const games = await getGames(gameRepo, 4)
  const genres = await getGenres(genreRepo, 6)

  return (
    <main className='w-full'>
      <Home games={games} genres={genres}/>
    </main>
  )
}

export default HomePage
