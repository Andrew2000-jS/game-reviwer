'use client'

import React from 'react'
import { Image } from '@nextui-org/react'

import styles from './styles/styles.module.css'
import Link from 'next/link'

interface Props {
  data: any[]
}

const HorizontalScroll = ({ data = [] }: Props) => {
  return (
    <div className={styles.container}>
      <div className="flex w-full gap-5 overflow-x-auto">
        {data.map(({ background_image: backgroundImage, name, id }, idx) => (
          <Link href={`/games/${id}`} key={idx} className='flex flex-col cursor-pointer'>
            <Image
              src={backgroundImage}
              width={400}
              alt={name}
              radius='none'
              isZoomed
              className={styles.img}
            />
            <p className='pt-2'>{name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HorizontalScroll
