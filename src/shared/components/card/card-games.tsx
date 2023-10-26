'use client'

import { Image } from '@nextui-org/react'
import Link from 'next/link'
import styles from './styles/card-games.module.css'

interface Props {
  image: string
  rating: number
  id: number
}

function CardGames ({ image, rating, id }: Props) {
  return (
    <Link href={`/games/${id}`} className="flex flex-col gap-2 mr-5">
      <div>
        <Image
          src={image}
          width={250}
          className={styles.img}
          isZoomed
          alt="game image"
        />
      </div>
      <div className="flex justify-center items-center gap-2 mt-3">
        <img className="h-[20px] w-[20px]" src="/fire.png" />
        <p className="font-bold">{rating}</p>
        <p className="font-bold">rating</p>
      </div>
    </Link>
  )
}

export default CardGames
