'use client'

import { Pusblisher } from '@/modules/publishers/domain'
import { Card, CardHeader, Button, Image, CardFooter } from '@nextui-org/react'
import Link from 'next/link'

function CardPublishers ({ publisher }: { publisher: Pusblisher }) {
  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-7 mb-5"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          {publisher.slug}
        </p>
        <h4 className="text-white/90 font-medium text-xl">{publisher.name}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={publisher.image_background}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src={publisher.image_background}
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">
              {publisher.games_count} Games
            </p>
            <p className="text-tiny text-white/60">The best of {publisher.name}</p>
          </div>
        </div>
        <Link href={`/publishers/${publisher.id}`}>
        <Button radius="full" size="sm">
          See more
        </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CardPublishers
