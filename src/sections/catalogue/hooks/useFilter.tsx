import { useEffect, useState } from 'react'

function useFilter (fn: any, args: any[]) {
  const [data, setData] = useState<any[]>([])
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
