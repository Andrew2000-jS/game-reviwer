'use client'

import { CardGames, Reveal } from '@/shared'
import { Button, Image } from '@nextui-org/react'
import { RootGame } from '@/modules/games/domain'

import styles from './styles/middle.module.css'

function Middle ({ games }: { games: RootGame }) {
  const variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="w-full h-full">
      <article>
        <div className={styles.titleContainer}>
          <h1 className="text-[1.6em] font-bold text-left">Currently Games</h1>
          <Button variant="solid" size="md" radius="md" color="primary">
            SEE ALL
          </Button>
        </div>
        <div></div>
      </article>
      <article className={styles.content}>
        <div className={styles.gameListContainer}>
          <div className={styles.gameList}>
            {games.results.map((item) => (
              <CardGames
                key={item.id}
                image={item.short_screenshots[0].image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <Reveal width="100%" variants={variants}>
          <div className={styles.legend}>
            <h3 className="w-full text-2xl font-bold text-center md:w-[50%]">
              Video games where imagination meets interaction, and every player
              becomes a hero.
            </h3>
          </div>
        </Reveal>

        <div className={styles.bottom}>
          <h4 className="text-lg text-justify font-bold pb-5">
            Discover the Latest Gaming Phenomena
          </h4>
          <p>
            In the world of gaming, current favorites are setting new standards
            for excitement and innovation. Gamers are enjoying a wide range of
            experiences, from competitive challenges to immersive storytelling.
            The gaming landscape offers something for everyone, making it an
            exciting time for players of all tastes.
          </p>
        </div>

        <div className="flex justify-center">
          <Reveal variants={variants}>
            <Image isBlurred src="/spiderman.jpeg" />
          </Reveal>
        </div>
      </article>
    </section>
  )
}

export default Middle
