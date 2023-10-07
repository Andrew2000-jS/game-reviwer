'use client'

import { Button } from '@nextui-org/react'
import Image from 'next/image'
import styles from '../styles/sections/top.module.css'

function Top () {
  return (
    <section className={styles.container}>
      <article>
        <p className={styles.titleLegend}>Best game reviews</p>
        <h1 className={styles.title}>
          Unlocking Game Worlds, One Review at a Time
        </h1>
        <p className={styles.description}>
          Discover a world of gaming insights and opinions. Dive into in-depth
          game reviews, ratings, and expert analysis. Level up your gaming
          experience with us!
        </p>
        <Button color="primary">See Our Catalogue</Button>
      </article>
      <article className="hidden md:block relative">
        <Image src="/joy_stick.png" width={700} height={700} alt="image" />
        <Image src="/cry.png" width={50} height={50} alt="image" className='absolute'/>
        <Image src="/unity.png" width={50} height={50} alt="image" className='absolute top-0'/>
        <Image src="/unreal.png" width={50} height={50} alt="image" className='absolute top-0 right-[25%]'/>
      </article>
    </section>
  )
}

export default Top
