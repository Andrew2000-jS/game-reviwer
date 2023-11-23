'use client'

import { Header, List } from '../../components'

import styles from '@/shared/styles/globals.module.css'
import catalogueStyles from './styles/styles.module.css'

import { useFilter } from '../../hooks'

import { gameRepository } from '@/modules/games/infrastructure'
import { genresRepository } from '@/modules/genres/infrastructure'
import { pusblisherRepository } from '@/modules/publishers/infrastructure'
import { creatorRepository } from '@/modules/creators/infrastructure'
import { platformRepository } from '@/modules/platforms/infrastructure'
import { storeRepository } from '@/modules/stores/infrastructure'

import { getGames } from '@/modules/games/application'
import { getCreators } from '@/modules/creators/application'
import { getPlatforms } from '@/modules/platforms/application'
import { getStores } from '@/modules/stores/application'
import { getGenres } from '@/modules/genres/application'
import { getPublishers } from '@/modules/publishers/application'

function CatalogueView () {
  const genres = useFilter(getGenres, [genresRepository(), 5])
  const publishers = useFilter(getPublishers, [pusblisherRepository(), 3])
  const creators = useFilter(getCreators, [creatorRepository(), 5])
  const platforms = useFilter(getPlatforms, [platformRepository(), 5])
  const stores = useFilter(getStores, [storeRepository(), 5])
  const games = useFilter(getGames, [gameRepository(), 5])

  return (
    <div className={styles.container}>
      <div className={catalogueStyles.content}>
        <header className={catalogueStyles.header}>
          <Header />
        </header>
        <section className={catalogueStyles.list}>
          <List
            games={games}
            publishers={publishers}
            stores={stores}
            creators={creators}
            genres={genres}
            platforms={platforms}
          />
        </section>
      </div>
    </div>
  )
}

export default CatalogueView
