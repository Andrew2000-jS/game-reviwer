'use client'

import { Image } from '@nextui-org/react'
import styles from './styles/card-games.module.css'

interface Props {
  image: string
  rating: number
}

function CardGames ({ image, rating }: Props) {
  return (
    <div className="flex flex-col gap-2 mr-5">
            <div>
              <Image
                src={image}
                width={250}
                className={styles.img}
                isZoomed
                alt="game image"
              />
            </div>
            <div className='flex justify-center items-center gap-2 mt-3'>
              <img className='h-[20px] w-[20px]' src='/fire.png'/>
              <p className='font-bold'>{rating}</p>
              <p className='font-bold'>rating</p>
            </div>
          </div>
  )
}

export default CardGames
