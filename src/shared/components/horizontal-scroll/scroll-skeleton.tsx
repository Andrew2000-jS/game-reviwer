'use client'

import { Skeleton } from '@nextui-org/react'
import { forwardRef } from 'react'

import styles from './styles/styles.module.css'

interface Props {
  onScroll?: any
}

// eslint-disable-next-line react/display-name
const ScrollSkeleton = forwardRef<HTMLDivElement, Props>(({ onScroll }, ref) => {
  const data = [1, 2, 3, 4, 5]

  return (
    <div className={styles.container} onScroll={onScroll} >
    <div className={`flex w-full gap-5 ${styles.scrollContainer}`} ref={ref}>
      {data.map((_, idx) => (
        <div
          key={idx}
          className="flex flex-col"
        >
          <Skeleton className='w-[250px] h-[300px] rounded-lg'/>
        </div>
      ))}
    </div>
  </div>
  )
})

export default ScrollSkeleton
