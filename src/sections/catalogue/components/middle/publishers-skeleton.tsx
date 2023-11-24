'use client'
import { Skeleton } from '@nextui-org/react'

function PublishersSkeleton () {
  const publishers = [1, 2, 3]
  return (
    <div className='flex items-center justify-center my-14 gap-5'>
      {publishers.map((_, idx) => (
        <div key={idx}>
          <Skeleton className="h-[250px] w-[350px]" />
          <Skeleton className="w-12 h-3 rounded-lg mt-2" />
        </div>
      ))}
    </div>
  )
}

export default PublishersSkeleton
