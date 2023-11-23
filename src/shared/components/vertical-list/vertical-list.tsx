'use client'

import { Image } from '@nextui-org/react'

function VerticalList ({ items }: { items: any[] }) {
  return (
    <div>
        {items.map(({ image_background: imageBackground, name }, idx: number) => (
          <div key={idx} className='mb-2'>
            <div className="flex items-center gap-3">
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
