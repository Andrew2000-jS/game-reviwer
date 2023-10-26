import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button
} from '@nextui-org/react'

import { Details } from '@/modules/creators/domain'
import { renderStars } from '@/shared'
import CreatorSkeleton from './creator-skeleton'

import styles from './styles/styles.module.css'

function CreatorDetail ({ creator }: { creator: Details }) {
  return (
    <>
      {!creator ? (
        <CreatorSkeleton />
      ) : (
        <Card className="mb-24 w-full md:w-[30rem] sm:mb-10">
          <CardHeader className="py-5 px-4 flex-col items-start w-full">
            <div className="w-full relative">
              <Image
                alt="banner"
                className="object-cover rounded-xl h-[10em]"
                src={creator.image_background}
                width={500}
                isZoomed
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Image
                  alt="user image"
                  className="object-cover rounded-full h-[5em] w-[5em] lg:h-[6em] lg:w-[6em]"
                  src={creator.image}
                />
              </div>
            </div>
          </CardHeader>

          <CardBody>
            <div className="mb-5">
              <h1 className="text-2xl font-bold">{creator.name}</h1>
              <div className="flex items-center">
                {renderStars(Number(creator.rating))}
                <span className="text-sm pl-[0.5em]">({creator.rating})</span>
              </div>
              <div className="flex gap-2 mt-[0.5em] overflow-x-auto">
                {creator.positions.map(({ name, id }) => (
                  <Button
                    key={id}
                    className="min-w-max h-[2em]"
                    color="primary"
                  >
                    {name}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <div
                className="text-justify overflow-y-auto h-[10em]"
                dangerouslySetInnerHTML={{ __html: creator.description }}
              />
            </div>
          </CardBody>
          <CardFooter>
            <div
              className={`${styles.platformsContainer} ${
                creator.platforms.count > 3 ? 'overflow-x-auto' : ''
              }`}
            >
              <h3 className="mb-5 text-xl font-bold">Platforms</h3>
              <div className="flex gap-2">
                {creator.platforms.results.map(({ platform }) => (
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

export default CreatorDetail
