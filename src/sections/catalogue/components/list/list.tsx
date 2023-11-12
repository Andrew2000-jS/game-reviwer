import { HorizontalScroll } from '@/shared'
import { GoChevronRight } from 'react-icons/go'

import Slider from './slider'

import styles from './styles/list.module.css'

function List ({ games }: { games: any }) {
  return (
    <>
      <div className="w-full">
        <div>
          <Slider data={games.data.results} />
        </div>
        <div className="pt-5">
          <div>
            <h3 className={styles.gamesTitle}>
              <span className="text-xl">All Games</span>
              <span className={styles.arrow}>
                <GoChevronRight />
              </span>
            </h3>
          </div>
          <div>
            <HorizontalScroll data={games.data.results} />
          </div>
        </div>
      </div>
    </>
  )
}

export default List
