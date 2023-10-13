import { Home } from '@/sections'
import { getGames, getGenres } from '@/modules/games/application'
import { gameRepository } from '@/modules/games/infrastructure'
import { Game, Genres } from '@/modules/games/domain'

async function HomePage () {
  const repository = gameRepository()
  const games: Game = await getGames(repository)
  const genres: Genres = await getGenres(repository)

  return (
    <main className='w-full'>
      <Home games={games} genres={genres}/>
    </main>
  )
}

export default HomePage
