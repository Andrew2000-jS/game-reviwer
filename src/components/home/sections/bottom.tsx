'use client'

import { useFetcher } from '@/hooks'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import { CardGenres } from '@/components'

import styles from '../styles/sections/bottom.module.css'
import Reveal from '@/components/animations/reveal'

function Bottom () {
  const variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 }
  }

  const { data } = useFetcher<RootGenres>({ query: 'genres', pageSize: 6 })

  return (
    <section className={styles.container}>
      <article className="absolute inset-0">
        <Image
          src="/ft.jpg"
          fill
          className="object-cover"
          alt="forest"
          priority={true}
        />
      </article>
      <article className={styles.content}>
     <Reveal variants={variants}>
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <div className={styles.legendContainer}>
            <p className={styles.legend}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
     </Reveal>

     <div className={styles.genresListContainer}>
          <div className={styles.genresList}>
            {data?.results.map((item) => (
              <div key={item.id} className={styles.genreItem}>
                <CardGenres
                  id={item.id}
                  title={item.name}
                  src={item.image_background}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="items-end mt-10">
          <Button>SEE ALL</Button>
        </div>
      </article>
    </section>
  )
}

export default Bottom
