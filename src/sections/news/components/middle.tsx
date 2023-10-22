import { RootCreator } from '@/modules/creators/domain'
import styles from './styles/middle.module.css'
import { CardCreators, CardPublishers } from '@/shared'
import { RootPusblisher } from '@/modules/publishers/domain'

function Middle ({
  creators,
  publishers
}: {
  creators: RootCreator
  publishers: RootPusblisher
}) {
  return (
    <section className={styles.container}>
      <article className={styles.left}>
        <div className="mb-5">
          <h1 className="text-2xl font-bold">Publishers</h1>
        </div>
        {publishers.results.map((publisher) => (
          <CardPublishers publisher={publisher} key={publisher.id} />
        ))}
      </article>
      <article className={styles.rightContainer}>
        <h1 className='text-left text-2xl font-bold mb-5 md:text-right'>Creators</h1>
        <div className={styles.right}>
          <div className={styles.creatorsList}>
            {creators.results.map((creator) => (
              <CardCreators creator={creator} key={creator.id} />
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}

export default Middle
