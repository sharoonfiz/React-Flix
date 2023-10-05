import axios from 'axios'
import { useEffect, useState, useMemo } from 'react'

export const useFetch = (url, customParams = {}) => {

  const [Data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { page, query } = customParams;

  const option = {
    method: "get",
    baseURL: "https://api.themoviedb.org/3/",    // this is base url
    url,
    // this is sourse patch we set this as manually,becoz here using coustom hook we can change sourse path whenever we w
    params: {
      api_key: "682d7961af84689049309c71f76b4eb1",
      ...customParams,
    }
  }


  const memoizedOptions = useMemo(() => option, [page, query, url]);

  useEffect(() => {

    const fetchData = async () => {

      try {
        let { data } = await axios(option)
        setData(data)
        setLoading(false)

      } catch (error) {
        setError(error.message)
        setLoading(false)
      }


    }

    fetchData()

  }, [memoizedOptions])


  return [Data, loading, error]

}


