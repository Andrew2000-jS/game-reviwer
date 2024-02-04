'use client'

import { useState, useRef, useEffect } from 'react'

function useScroll () {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollX, setscrollX] = useState(0)
  const [scrollEnd, setScrollEnd] = useState(false)

  const slide = (shift: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: shift,
        behavior: 'smooth'
      })

      scrollRef.current.scrollLeft += shift
      setscrollX(scrollX + shift)
      if (Math.floor(scrollRef.current.scrollWidth - scrollRef.current.scrollLeft) <= scrollRef.current.offsetWidth) {
        setScrollEnd(true)
      } else {
        setScrollEnd(false)
      }
    }
  }

  const scrollCheck = () => {
    if (scrollRef.current) {
      setscrollX(scrollRef.current.scrollLeft)

      if (Math.floor(scrollRef.current.scrollWidth - scrollRef.current.scrollLeft) <= scrollRef.current.offsetWidth) {
        setScrollEnd(true)
      } else {
        setScrollEnd(false)
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      scrollCheck()
    }

    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return { scrollRef, scrollCheck, slide, scrollEnd, scrollX }
}

export default useScroll
