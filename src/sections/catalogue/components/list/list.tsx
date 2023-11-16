'use client'

import { HorizontalScroll, ScrollSkeleton } from '@/shared'
import { GoChevronRight } from 'react-icons/go'
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle
} from 'react-icons/io'

import { useScroll } from '@/shared/hooks'
import Slider from './slider'

import styles from './styles/list.module.css'
import SliderSkeleton from './slider-skeleton'

function List ({ games }: { games: any }) {
  const { scrollRef, scrollCheck, scrollEnd, scrollX, slide } = useScroll()

  return (
    <>
      <div className="w-full">
        <div>
          {games.loading ? (
            <SliderSkeleton />
          ) : (
            <Slider data={games.data.results} />
          )}
        </div>
        <div className="pt-5">
          <div className="flex items-center justify-between">
            <h3 className={styles.gamesTitle}>
              <span className="text-xl">All Games</span>
              <span className={styles.arrow}>
                <GoChevronRight />
              </span>
            </h3>
            <div className="flex items-center">
              <div className="cursor-pointer" onClick={() => slide(-510)}>
                <IoIosArrowDropleftCircle
                  fill={`${scrollX < 1 ? 'rgba(145, 138, 138, 0.21)' : '#fff'}`}
                  size="23px"
                  className="cursor-pointer transition-colors"
                />
              </div>
              <div className="cursor-pointer" onClick={() => slide(+501)}>
                <IoIosArrowDroprightCircle
                  fill={scrollEnd ? 'rgba(145, 138, 138, 0.21)' : '#fff'}
                  size="23px"
                  className="cursor-pointer transition-colors"
                />
              </div>
            </div>
          </div>
          <div>
            {games.loading ? (
              <ScrollSkeleton ref={scrollRef} onScroll={scrollCheck} />
            ) : (
              <HorizontalScroll
                data={games.data.results}
                ref={scrollRef}
                onScroll={scrollCheck}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default List
