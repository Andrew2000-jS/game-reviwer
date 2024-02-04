'use client'

import { Image } from '@nextui-org/react'

function VerticalList ({ items }: { items: unknown }) {
  const itemsArray = Array.isArray(items) ? items : []
  return (
    <div>
        {itemsArray.map(({ image_background: imageBackground, name }, idx: number) => (
          <div key={idx} className='mb-2'>
            <div className="flex items-center gap-3 w-[15em] md:w-full">
              <div className='h-[70px]'>
                <Image src={imageBackground} alt={name} width={100} height={70} radius='sm' className='h-[70px] object-cover'/>
              </div>
              <div>
                <p>{name}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default VerticalList
