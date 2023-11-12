'use client'

import { useParams } from 'next/navigation'
import { getCreator } from '@/modules/creators/application'
import { creatorRepository } from '@/modules/creators/infrastructure'
import { CreatorDetailView } from '@/sections/detail/views'
import { useEffect, useState } from 'react'
import { Detail } from '@/modules/creators/domain'

function GamesDetailPage () {
  const [creator, setCreator] = useState<Detail | null>(null)
  const { id } = useParams()
  const repository = creatorRepository()

  useEffect(() => {
    getCreator(repository, Number(id)).then(res => setCreator(res))
  }, [])

  return (
    <main className='w-full'>
      <CreatorDetailView creator={creator}/>
    </main>
  )
}

export default GamesDetailPage
