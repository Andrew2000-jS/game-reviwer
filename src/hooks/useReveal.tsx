import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

function useReveal () {
  const { ref, inView } = useInView()
  const mainControls = useAnimation()

  useEffect(() => {
    if (inView) {
      mainControls.start('visible')
    } else {
      mainControls.start('hidden')
    }
  }, [inView])

  return {
    ref,
    mainControls
  }
}

export default useReveal
