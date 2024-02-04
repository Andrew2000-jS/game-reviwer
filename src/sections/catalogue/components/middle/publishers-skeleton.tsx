'use client'
import { Skeleton } from '@nextui-org/react'

function PublishersSkeleton () {
  const publishers = [1, 2, 3]
  return (
    <div className='flex flex-wrap items-center justify-center gap-5 md:flex-nowrap'>
      {publishers.map((_, idx) => (
        <div key={idx}>
          <Skeleton className="h-[250px] w-[300px] md:w-[350px] rounded-lg" />
          <Skeleton className="w-12 h-3 rounded-lg mt-2" />
        </div>
      ))}
    </div>
  )
}

export default PublishersSkeleton
