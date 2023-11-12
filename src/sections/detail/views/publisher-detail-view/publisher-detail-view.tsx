import { Detail } from '@/modules/publishers/domain'
import { PublisherDetail } from '../../components'

import styles from '@/shared/styles/globals.module.css'

function PublisherDetailView ({ publisher }: { publisher: Detail | null }) {
  return (
    <div className={styles.container}>
      <PublisherDetail publisher={publisher}/>
    </div>
  )
}

export default PublisherDetailView
