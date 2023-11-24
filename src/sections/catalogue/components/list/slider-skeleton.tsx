'use client'
import { Skeleton } from '@nextui-org/react'
import styles from './styles/slider.module.css'

function SliderSkeleton () {
  const data = [1, 2, 3]
  return (
    <div className={styles.carousel}>
      <div className="flex w-[70%]">
        <>
          <Skeleton className="w-[100%] h-[450px] rounded-lg" />
        </>
      </div>
      <div className="ml-5 w-[30%]">
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
