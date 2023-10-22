import { Home } from '@/sections'
import { getGames, getGenres } from '@/modules/games/application'
import { gameRepository } from '@/modules/games/infrastructure'

async function HomePage () {
  const repository = gameRepository()
  const games = await getGames(repository)
  const genres = await getGenres(repository)

  return (
    <main className='w-full'>
      <Home games={games} genres={genres}/>
    </main>
  )
}

export default HomePage
