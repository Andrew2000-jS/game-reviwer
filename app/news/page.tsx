import { creatorRepository } from '@/modules/creators/infrastructure'
import { pusblisherRepository } from '@/modules/publishers/infrastructure'
import { getCreators } from '@/modules/creators/application'
import { getPublishers } from '@/modules/publishers/application'

import { News } from '@/sections'

async function NewsPage () {
  const creatorsRepository = creatorRepository()
  const publisherRepository = pusblisherRepository()

  const publishers = await getPublishers(publisherRepository)
  const creators = await getCreators(creatorsRepository)

  return (
    <main className='w-full'>
      <News creators={creators} publishers={publishers}/>
    </main>
  )
}

export default NewsPage
