'use client'

import { Creator } from '@/modules/creators/domain'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import Link from 'next/link'

import styles from './styles/card-creators.module.css'

function CardCreators ({ creator }: { creator: Creator }) {
  return (
    <Link href={`/creators/${creator.id}`} className="mb-5 sm:grid">
      <Card className={styles.content} shadow="sm">
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={creator.name}
            className="w-full object-cover h-[140px]"
            src={creator.image}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{creator.name}</b>
            <p className="text-default-500">{creator.games_count}</p>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default CardCreators
