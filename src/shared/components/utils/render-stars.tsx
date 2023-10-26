import { StarIcon, StarHalfIcon } from '@/shared'

const renderStars = (rating: number) => {
  const starArray = []

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starArray.push(<StarIcon key={i} />)
    } else if (i - 0.5 === rating) {
      starArray.push(<StarHalfIcon key={i} />)
    }
  }

  return starArray
}

export default renderStars
