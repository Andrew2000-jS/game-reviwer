import { RootCreator } from '@/modules/creators/domain'
import { RootPusblisher } from '@/modules/publishers/domain'
import { Header, Middle } from '../components'

import styles from '@/shared/styles/globals.module.css'

function News ({ creators, publishers }: { creators: RootCreator, publishers: RootPusblisher }) {
  return (
    <div className={styles.container}>
      <Header />
      <Middle creators={creators} publishers={publishers}/>
    </div>
  )
}

export default News
