'use client'

import { Header, List } from '../../components'

import styles from '@/shared/styles/globals.module.css'
import catalogueStyles from './styles/styles.module.css'

import { useFilter } from '../../hooks'
import { RootGame } from '@/modules/games/domain'
import { getGames } from '@/modules/games/application'
import { gameRepository } from '@/modules/games/infrastructure'

// import { genresRepository } from '@/modules/genres/infrastructure'
// import { pusblisherRepository } from '@/modules/publishers/infrastructure'
// import { creatorRepository } from '@/modules/creators/infrastructure'
// import { platformRepository } from '@/modules/platforms/infrastructure'
// import { storeRepository } from '@/modules/stores/infrastructure'

// import { getCreators } from '@/modules/creators/application'
// import { getPlatforms } from '@/modules/platforms/application'
// import { getStores } from '@/modules/stores/application'
// import { getGenres } from '@/modules/genres/application'
// import { getPublishers } from '@/modules/publishers/application'

// import { RootGenres } from '@/modules/genres/domain'
// import { RootPusblisher } from '@/modules/publishers/domain'
// import { RootCreator } from '@/modules/creators/domain'
// import { RootPlatform } from '@/modules/platforms/domain'
// import { RootStore } from '@/modules/stores/domain'

function CatalogueView () {
  // const genres = useFilter<RootGenres>(getGenres, [genresRepository(), 5])
  // const publishers = useFilter<RootPusblisher>(getPublishers, [pusblisherRepository(), 5])
  // const creators = useFilter<RootCreator>(getCreators, [creatorRepository(), 5])
  // const platforms = useFilter<RootPlatform>(getPlatforms, [platformRepository(), 5])
  // const stores = useFilter<RootStore>(getStores, [storeRepository(), 5])
  const games = useFilter<RootGame>(getGames, [gameRepository(), 5])

  return (
    <div className={styles.container}>
      <div className={catalogueStyles.content}>
        <header className={catalogueStyles.header}>
          <Header />
        </header>
        <section className={catalogueStyles.list}>
          <List games={games} />
        </section>
      </div>
    </div>
  )
}

export default CatalogueView
