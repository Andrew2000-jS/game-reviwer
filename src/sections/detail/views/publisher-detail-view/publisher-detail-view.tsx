import { Detail } from '@/modules/publishers/domain'
import styles from '@/shared/styles/globals.module.css'
import { PublisherDetail } from '../../components'

function PublisherDetailView ({ publisher }: { publisher: Detail | null }) {
  return (
    <div className={styles.container}>
      <PublisherDetail publisher={publisher}/>
    </div>
  )
}

export default PublisherDetailView
