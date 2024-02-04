import { useEffect, useState } from 'react'

function useFilter<T> (fn: any, args: any[]) {
  const [data, setData] = useState<T | []>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fn(...args).then((res: any) => {
      setLoading(false)
      setData(res)
    })
  }, [])

  return { data, loading }
}

export default useFilter
