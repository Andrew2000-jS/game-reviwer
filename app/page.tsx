import { Home } from '@/sections'
import { getGames, getGenres } from '@/modules/games/application'
import { gameRepository } from '@/modules/games/infrastructure'

async function HomePage () {
  const repository = gameRepository()
  const games = await getGames(repository, 4)
  const genres = await getGenres(repository, 6)

  return (
    <main className='w-full'>
      <Home games={games} genres={genres}/>
    </main>
  )
}

export default HomePage
