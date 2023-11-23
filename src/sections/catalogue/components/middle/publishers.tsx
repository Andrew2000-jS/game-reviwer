'use client'

import { ScrollSkeleton } from '@/shared'
import { IoStorefront } from 'react-icons/io5'
import { Button, Image } from '@nextui-org/react'
import { MiddlePublisherType } from '../../types'

function Publishers ({ publishers, loading }: MiddlePublisherType) {
  return (
    <div className="pt-5 flex flex-col justify-center items-center">
    <div className="w-full flex flex-col items-center px-10 pt-5 bg-[#2A2A2A] rounded-lg mb-[-2em]">
      <div className="w-full mb-[-2em] flex items-center justify-between">
        <h3 className="text-left flex items-center">
          <IoStorefront size={25} />
          <span className="pl-4 text-xl text-left text-white">
            Publishers
          </span>
        </h3>
        <div>
          <Button variant="ghost" color="primary">
            See more
          </Button>
        </div>
      </div>
      <div className='flex items-center justify-center my-14 gap-5'>
        {loading ? (
          <ScrollSkeleton />
        ) : (
          publishers.map(({ image_background: imageBackground, name, id }: { image_background: string, name: string, id: number }) => (
            <div key={id}>
               <Image
              src={imageBackground}
              width={350}
              alt={name}
              className='h-[250px] w-[450px] object-cover'
            />
            </div>
          ))
        )}
      </div>
    </div>
  </div>
  )
}

export default Publishers
