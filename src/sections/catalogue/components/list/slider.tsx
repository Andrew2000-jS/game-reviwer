'use client'

import { useEffect, useState } from 'react'
import { Button, Image } from '@nextui-org/react'
import Link from 'next/link'

import styles from './styles/slider.module.css'
import { Game } from '@/modules/games/domain'

export default function Slider ({ data }: { data: unknown }) {
  const dataArray: Game[] = Array.isArray(data) ? data : []
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % dataArray.length)
    }, 4000)

    return () => clearInterval(intervalId)
  }, [dataArray.length])

  return (
    <div className={styles.carousel}>
      <div className="flex w-full relative md:w-[70%]">
        {dataArray.map(({ background_image: backgroundImage, name, id }, idx) => (
          <>
            <Image
              src={backgroundImage}
              alt={name}
              key={`${name}-${idx}`}
              width="100%"
              height={500}
              className={slide === idx ? styles.slide : 'hidden'}
            />
            <div className={slide === idx ? styles.content : 'hidden'}>
              <h2 className="text-3xl font-bold pb-2">{name}</h2>
              <p className="pb-2">
                Discover all opinions and reviews about all this games
              </p>
              <Link href={`/games/${id}`}>
                <Button color="primary">See more</Button>
              </Link>
              <div className={styles.points}>
                {dataArray.map((_, idx) => (
                  <button className={slide === idx ? styles.crrPoint : styles.point} key={idx}></button>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
      <div className={`w-[30%] ${styles.cImages}`}>
        {dataArray.map(({ background_image: backgroundImage, name }, idx) => (
          <div
            key={idx}
            className={slide === idx ? styles.indicator : styles.indicators}
            onClick={() => setSlide(idx)}
          >
            <Image src={backgroundImage} alt="image" width={80} radius="md" />
            <p className="pl-1 text-sm w-[40%]">{name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
