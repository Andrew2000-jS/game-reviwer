'use client'

import { HorizontalScroll, ScrollSkeleton } from '@/shared'

import { GoChevronRight } from 'react-icons/go'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from 'react-icons/io'

import styles from '../../styles/styles.module.css'
import { MiddleGameType } from '../../types'

function Games ({ slide, scrollEnd, scrollRef, scrollX, scrollCheck, games, loading }: MiddleGameType) {
  return (
    <div className="pt-5">
    <div className="flex items-center justify-between">
      <h3 className={styles.title}>
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
      {loading ? (
        <ScrollSkeleton ref={scrollRef} onScroll={scrollCheck} />
      ) : (
        <HorizontalScroll
          data={games}
          ref={scrollRef}
          href="games"
          onScroll={scrollCheck}
          width="320px"
          height="300px"
        />
      )}
    </div>
  </div>
  )
}

export default Games
