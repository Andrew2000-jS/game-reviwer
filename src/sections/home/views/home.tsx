import { RootGame, RootGenres } from '@/modules/games/domain'
import { Bottom, Middle, Top } from '../components'

import styles from '@/shared/styles/globals.module.css'

function Home ({ games, genres }: { games: RootGame, genres: RootGenres }) {
  return (
    <div className={styles.container}>
      <Top />
      <Middle games={games}/>
      <Bottom genres={genres}/>
    </div>
  )
}

export default Home
