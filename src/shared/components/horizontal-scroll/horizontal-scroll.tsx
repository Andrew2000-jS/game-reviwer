'use client'
import { forwardRef } from 'react'
import { Image } from '@nextui-org/react'

import styles from './styles/styles.module.css'
import Link from 'next/link'

interface Props {
  data: any[]
  onScroll?: any
}

// eslint-disable-next-line react/display-name
const HorizontalScroll = forwardRef<HTMLDivElement, Props>(({ data = [], onScroll }, ref) => {
  return (
    <div className={styles.container} onScroll={onScroll} >
      <div className={`flex w-full gap-5 ${styles.scrollContainer}`} ref={ref}>
        {data.map(({ background_image: backgroundImage, name, id }, idx) => (
          <Link
            href={`/games/${id}`}
            key={idx}
            className="flex flex-col cursor-pointer"
          >
            <Image
              src={backgroundImage}
              width={300}
              alt={name}
              radius="sm"
              isZoomed
              className={styles.img}
            />
            <p className="pt-2 w-[250px]">{name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
})

export default HorizontalScroll
