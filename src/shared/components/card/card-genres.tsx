'use client'

import { Card, CardFooter, Image, Button } from '@nextui-org/react'
import styles from './styles/card-genres.module.css'

interface Props {
  src: string
  id: number
  title: string
}

function CardGames ({ src, id, title }: Props) {
  return (
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none h-full"
        >
          <Image
            alt="game image"
            className={styles.img}
            height={200}
            width={200}
            src={src}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">{title}</p>
            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                SEE MORE
            </Button>
          </CardFooter>
        </Card>
  )
}

export default CardGames
