import { useEffect, useState } from 'react'

interface Props {
  query: string
  pageSize: number
}

function useFetcher<T> ({ query, pageSize }: Props) {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const apiUrl = `https://api.rawg.io/api/${query}`
      const url = `${apiUrl}?key=${process.env.API_KEY}&page_size=${pageSize}`
      const response = await fetch(url)
      const data = await response.json()
      return data
    }

    getData().then((res) => setData(res)).finally(() => setLoading(false))
  }, [])

  return { data, loading }
}

export default useFetcher
