import { Details } from '@/modules/creators/domain'
import { CreatorDetail } from '../../components'

import styles from '@/shared/styles/globals.module.css'

function CreatorDetailView ({ creator }: { creator: Details }) {
  return (
    <div className={styles.container}>
      <CreatorDetail creator={creator} />
    </div>
  )
}

export default CreatorDetailView
