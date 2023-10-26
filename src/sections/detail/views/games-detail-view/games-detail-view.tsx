import { GameDetails } from '@/modules/games/domain'
import { GameDetail } from '../../components'

import styles from '@/shared/styles/globals.module.css'

function GamesDetailView ({ game }: { game: GameDetails }) {
  return (
    <div className={styles.container}>
      <GameDetail game={game}/>
    </div>
  )
}

export default GamesDetailView
