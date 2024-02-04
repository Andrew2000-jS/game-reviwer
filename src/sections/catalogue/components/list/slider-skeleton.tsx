'use client'
import { Skeleton } from '@nextui-org/react'
import styles from './styles/slider.module.css'

function SliderSkeleton () {
  const data = [1, 2, 3]
  return (
    <div className={styles.carousel}>
      <div className="flex md:w-[70%] w-full">
        <>
          <Skeleton className="w-full md:h-[450px] h-[300px] rounded-lg " />
        </>
      </div>
      <div className="ml-5 w-[30%] hidden md:block">
        {data.map((idx) => (
          <div key={idx} className='flex items-center gap-5 mb-2'>
            <Skeleton className='h-[70px] w-[80px] rounded-lg'/>
            <Skeleton className="h-[10px] w-[20%] rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SliderSkeleton
