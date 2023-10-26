import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Skeleton
} from '@nextui-org/react'

function GameSkeleton () {
  return (
    <Card className="mb-24 w-full md:w-[30rem] sm:mb-10 ">
      <CardHeader className="py-5 px-4 flex-col items-start w-full">
        <Skeleton className="rounded-xl h-[250px] w-full" />
      </CardHeader>
      <CardBody>
        <div>
          <Skeleton className="w-[80%]" />
          <div className="flex items-center">
            <Skeleton className="h-[0.5em] w-[5em]" />
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
            <Skeleton className="w-[3em] h-[0.5em]" />
          </h3>
          <div className="flex gap-2">
            <Skeleton className="w-[5em] h-[2em] rounded-md" />
            <Skeleton className="w-[5em] h-[2em] rounded-md" />
            <Skeleton className="w-[5em] h-[2em] rounded-md" />
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default GameSkeleton
