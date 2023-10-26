import { Card, CardBody, CardHeader, Skeleton } from '@nextui-org/react'

function PublisherSkeleton () {
  return (
    <Card className="mb-24 w-full md:w-[30rem] sm:mb-10">
      <CardHeader>
        <Skeleton className="object-cover rounded-xl h-[250px] w-full" />
      </CardHeader>
      <CardBody>
        <div>
          <div className="mb-5">
            <h1 className="text-2xl font-bold">
                <Skeleton className='w-[2em] h-[0.5em]'/>
            </h1>
          </div>
          <div>
            <Skeleton className="w-full h-[1em] mb-2" />
            <Skeleton className="w-full h-[1em] mb-2" />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default PublisherSkeleton
