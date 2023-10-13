import { Game, Genres } from '@/modules/games/domain'
import { Top, Middle, Bottom } from '../components'
import styles from './styles/home.module.css'

function Home ({ games, genres }: { games: Game, genres: Genres }) {
  return (
    <div className={styles.container}>
      <Top />
      <Middle games={games}/>
      <Bottom genres={genres}/>
    </div>
  )
}

export default Home
