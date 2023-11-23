import { useScroll } from '@/shared/hooks'
import { Middle } from '../middle'

import { ListInterface } from '../../types'
import Slider from './slider'
import SliderSkeleton from './slider-skeleton'
import { Bottom } from '../bottom'

function List ({
  games,
  publishers,
  stores,
  genres,
  platforms,
  creators
}: ListInterface) {
  const { scrollRef, scrollCheck, scrollEnd, scrollX, slide } = useScroll()

  const adapter = (e: any) => e.data.results

  return (
    <>
      <div className="w-full">
        <div>
          {games.loading ? (
            <SliderSkeleton />
          ) : (
            <Slider data={adapter(games)} />
          )}
        </div>
        <Middle
          games={games}
          publishers={publishers}
          slide={slide}
          scrollCheck={scrollCheck}
          scrollEnd={scrollEnd}
          scrollRef={scrollRef}
          scrollX={scrollX}
        />
        <Bottom
          genres={adapter(genres)}
          platforms={adapter(platforms)}
          stores={adapter(stores)}
          creators={adapter(creators)}
          loaders={[
            genres.loading,
            stores.loading,
            platforms.loading,
            creators.loading
          ]}
        />
      </div>
    </>
  )
}

export default List
