'use client'

import { BottomInterface } from '../../types'
import {
  HorizontalScroll,
  ScrollSkeleton,
  VerticalList,
  VerticalSkeleton
} from '@/shared'
import { GoChevronRight } from 'react-icons/go'

import styles from '../../styles/styles.module.css'
import { Button } from '@nextui-org/react'

function bottom ({
  genres,
  platforms,
  stores,
  creators,
  loaders
}: BottomInterface) {
  return (
    <div className="mt-28 mb-10">
      <div className="w-full flex justify-between items-center gap-5 overflow-x-auto md:overflow-x-hidden">
        <div className="border-r-1 border-r-gray-600 md:flex-1 pr-5">
          <div className="w-ful flex items-center justify-between mb-5">
            <h3 className="font-bold">Genres</h3>
            <Button variant="ghost" color="primary">
              See more
            </Button>
          </div>
          <div>
            {loaders[0] ? (
              <VerticalSkeleton />
            ) : (
              <VerticalList items={genres} />
            )}
          </div>
        </div>
        <div className="border-r-1 border-r-gray-600 md:flex-1 pr-5">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold">Stores</h3>
            <Button variant="ghost" color="primary">
              See more
            </Button>
          </div>
          <div>
            {loaders[1] ? (
              <VerticalSkeleton />
            ) : (
              <VerticalList items={stores} />
            )}
          </div>
        </div>
        <div className="md:flex-1">
          <div className="w-full flex items-center justify-between mb-5">
            <h3 className="font-bold">Platforms</h3>
            <Button variant="ghost" color="primary">
              See more
            </Button>
          </div>
          <div>
            {loaders[2] ? (
              <VerticalSkeleton />
            ) : (
              <VerticalList items={platforms} />
            )}
          </div>
        </div>
      </div>
      <div className="mt-[2.5em]">
        <div className="flex items-center justify-between">
          <h3 className={styles.title}>
            <span className="text-xl">Creators</span>
            <span className={styles.arrow}>
              <GoChevronRight />
            </span>
          </h3>
        </div>
        <div>
          {loaders[3] ? (
            <ScrollSkeleton height="250px" width="200px" />
          ) : (
            <HorizontalScroll
              data={creators}
              height="250px"
              width="200px"
              href="creators"
              isCreator={true}
              imgRadius="sm"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default bottom
