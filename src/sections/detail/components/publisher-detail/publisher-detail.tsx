import { Detail } from '@/modules/publishers/domain'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import PublisherSkeleton from './publisher-skeleton'

function PublisherDetail ({ publisher }: { publisher: Detail | null }) {
  return (
    <>
      {!publisher ? (
        <PublisherSkeleton />
      ) : (
        <Card className="mb-24 w-full md:w-[30rem] sm:mb-10">
          <CardHeader>
          <Image
                alt="publusher banner"
                className="object-cover rounded-xl w-full"
                src={publisher.image_background}
                width={500}
                isZoomed
              />
          </CardHeader>
          <CardBody>
            <div>
              <div className='mb-5'>
                <h1 className='text-2xl font-bold'>{publisher.name}</h1>
              </div>
              <div className="text-justify overflow-y-auto h-[10em]" dangerouslySetInnerHTML={{ __html: publisher.description }}/>
            </div>
          </CardBody>
        </Card>
      )}
    </>
  )
}

export default PublisherDetail
