import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Skeleton
} from '@nextui-org/react'

function CreatorSkeleton () {
  return (
    <Card className="mb-24 w-full md:w-[30rem] sm:mb-10">
      <CardHeader className="py-5 px-4 flex-col items-start w-full">
        <div className="w-full relative">
          <Skeleton className="w-full h-[150px]" />
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Skeleton className="rounded-full h-[5em] w-[5em] lg:h-[6em] lg:w-[6em]" />
          </div>
        </div>
      </CardHeader>

      <CardBody>
        <div className="mb-5">
          <h1>
            <Skeleton className="w-[2em] h-[0.5em]" />
          </h1>
          <div className="flex gap-2 mt-[0.5em]">
            <Skeleton className="w-[3em] h-[2em] rounded-md" />
            <Skeleton className="w-[3em] h-[2em] rounded-md" />
            <Skeleton className="w-[3em] h-[2em] rounded-md" />
          </div>
        </div>
        <div className="mt-5">
          <div>
            <Skeleton className="w-full h-[1em] mb-2" />
            <Skeleton className="w-full h-[1em] mb-2" />
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <div>
          <h3 className="mb-5">
            <Skeleton className="w-[2em] h-[0.5em]" />
          </h3>
          <div className="flex gap-2">
            <div className="flex gap-2 mt-[0.5em] overflow-x-auto">
              <Skeleton className="w-[3em] h-[2em] rounded-md" />
              <Skeleton className="w-[3em] h-[2em] rounded-md" />
              <Skeleton className="w-[3em] h-[2em] rounded-md" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CreatorSkeleton
