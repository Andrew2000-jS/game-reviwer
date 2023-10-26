'use client'

import { GameDetails } from '@/modules/games/domain'
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button
} from '@nextui-org/react'

import styles from './styles/styles.module.css'
import GameSkeleton from './game-skeleton'
import { renderStars } from '@/shared'

function GameDetail ({ game }: { game: GameDetails | null }) {
  const parseDescription = game?.description_raw.replace(/Español[\s\S]*/, '')

  return (
    <>
      {!game ? (
        <GameSkeleton />
      ) : (
        <Card className="mb-24 w-full md:w-[30rem] sm:mb-10">
          <CardHeader className="py-5 px-4 flex-col items-start w-full">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={game.background_image}
              width={500}
            />
          </CardHeader>
          <CardBody>
            <div>
              <h1 className="text-2xl font-bold">{game.name}</h1>
              <div className="flex items-center">
                {renderStars(game.rating)}
                <span className="text-sm pl-[0.5em]">({game.rating})</span>
              </div>
            </div>
            <div className="mt-5">
              <div className={styles.description}>
                <p className="text-justify">{parseDescription}</p>
              </div>
            </div>
          </CardBody>
          <CardFooter>
            <div className={`${styles.platformsContainer} ${game.parent_platforms.length > 3 ? 'overflow-x-auto' : ''}`}>
              <h3 className="mb-5 text-xl font-bold">Platforms</h3>
              <div className='flex gap-2'>
                {game.parent_platforms.map(({ platform }) => (
                  <Button
                    key={platform.id}
                    className="min-w-max"
                    radius="sm"
                    color="primary"
                  >
                    {platform.name}
                  </Button>
                ))}
              </div>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

export default GameDetail
