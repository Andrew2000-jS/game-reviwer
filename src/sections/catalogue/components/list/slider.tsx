'use client'

import { useEffect, useState } from 'react'
import { Button, Image } from '@nextui-org/react'
import Link from 'next/link'

import styles from './styles/slider.module.css'

export default function Slider ({ data = [] }: { data: any[] }) {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % data.length)
    }, 4000)

    return () => clearInterval(intervalId)
  }, [data.length])

  return (
    <div className={styles.carousel}>
      <div className="flex w-[70%] relative">
        {data.map(({ background_image: backgroundImage, name, id }, idx) => (
          <>
            <Image
              src={backgroundImage}
              alt={name}
              key={idx}
              width={1000}
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
            </div>
          </>
        ))}
      </div>
      <div className="w-[30%]">
        {data.map(({ background_image: backgroundImage, name }, idx) => (
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
