'use client'

import { useParams } from 'next/navigation'
import { getPublisher } from '@/modules/publishers/application'
import { pusblisherRepository } from '@/modules/publishers/infrastructure'
import { PublisherDetailView } from '@/sections/detail/views'
import { useEffect, useState } from 'react'
import { Detail } from '@/modules/publishers/domain'

function GamesDetailPage () {
  const [publisher, setPublisher] = useState<Detail | null>(null)
  const { id } = useParams()
  const repository = pusblisherRepository()

  useEffect(() => {
    getPublisher(repository, Number(id)).then(res => setPublisher(res))
  }, [])

  return (
    <main className='w-full'>
      <PublisherDetailView publisher={publisher}/>
    </main>
  )
}

export default GamesDetailPage
