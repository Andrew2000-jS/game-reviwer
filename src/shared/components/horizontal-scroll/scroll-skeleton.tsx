'use client'

import { Skeleton } from '@nextui-org/react'
import { forwardRef } from 'react'

import styles from './styles/styles.module.css'

interface Props {
  onScroll?: any
  width: string
  height: string
}

// eslint-disable-next-line react/display-name
const ScrollSkeleton = forwardRef<HTMLDivElement, Props>(
  ({ onScroll, width, height }, ref) => {
    const data = [1, 2, 3, 4, 5]

    return (
      <div className={styles.container} onScroll={onScroll}>
        <div
          className={`flex w-full gap-5 ${styles.scrollContainer} overflow-x-hidden`}
          ref={ref}
        >
          {data.map((_, idx) => (
            <div key={idx} className="flex flex-col">
              <Skeleton className='rounded-lg' style={{ width, height }}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
)

export default ScrollSkeleton
