'use client'

import { Skeleton } from '@nextui-org/react'

function VerticalSkeleton () {
  const items = [1, 2, 3, 4, 5]
  return (
    <div>
    {items.map((_, idx: number) => (
      <div key={idx} className='mb-2'>
        <div className="flex items-center gap-3">
          <div className='h-[70px]'>
            <Skeleton className="w-[100px] h-[70px]"/>
          </div>
          <div>
            <Skeleton className="w-10 h-2 rounded-lg"/>
          </div>
        </div>
      </div>
    ))}
</div>
  )
}

export default VerticalSkeleton
