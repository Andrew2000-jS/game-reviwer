'use client'

import { Header, List } from '../../components'

import styles from '@/shared/styles/globals.module.css'
import catalogueStyles from './styles/styles.module.css'

import { useFilter } from '../../hooks'

import { ListType } from '../../types'
import { RootGenre } from '@/modules/genres/domain'
import { RootPusblisher } from '@/modules/publishers/domain'
import { RootCreator } from '@/modules/creators/domain'
import { RootPlatform } from '@/modules/platforms/domain'
import { RootStore } from '@/modules/stores/domain'
import { RootGame } from '@/modules/games/domain'

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
  const genres = useFilter<RootGenre>(getGenres, [genresRepository(), 5]) as ListType<RootGenre>
  const publishers = useFilter(getPublishers, [pusblisherRepository(), 3]) as ListType<RootPusblisher>
  const creators = useFilter(getCreators, [creatorRepository(), 5]) as ListType<RootCreator>
  const platforms = useFilter(getPlatforms, [platformRepository(), 5]) as ListType<RootPlatform>
  const stores = useFilter(getStores, [storeRepository(), 5]) as ListType<RootStore>
  const games = useFilter(getGames, [gameRepository(), 5]) as ListType<RootGame>

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
