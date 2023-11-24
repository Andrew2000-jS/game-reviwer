'use client'
import { forwardRef } from 'react'
import { Image } from '@nextui-org/react'

import styles from './styles/styles.module.css'
import Link from 'next/link'

interface Props {
  data: any[]
  onScroll?: any
  href: string
  width: string
  height: string
  textColor?: string
  isCreator?: boolean
  imgRadius?: 'sm' | 'none' | 'md' | 'lg' | 'full'
}

// eslint-disable-next-line react/display-name
const HorizontalScroll = forwardRef<HTMLDivElement, Props>(({ data = [], href, width, height, onScroll, textColor = '#fff', isCreator = false, imgRadius = 'sm' }, ref) => {
  return (
    <div className={styles.container} onScroll={onScroll} >
      <div className={`flex w-full gap-5 ${styles.scrollContainer} ${onScroll ? 'overflow-x-hidden' : styles.scrollLateralContainer}`} ref={ref}>
        {data.map(({ background_image: backgroundImage, image_background: imageBackground, name, id, image }, idx) => (
          <Link
            href={`/${href}/${id}`}
            key={idx}
            className="flex flex-col cursor-pointer"
          >
            <Image
              src={isCreator ? image : backgroundImage || imageBackground}
              width={300}
              alt={name}
              radius={imgRadius}
              isZoomed
              className={`object-cover w-[${width}] h-[${height}]`}
            />
            <p className={`pt-2 w-[${width}] text-[${textColor}]`}>{name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
})

export default HorizontalScroll
