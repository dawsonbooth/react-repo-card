import { useEffect, useState } from 'react'

/**
 * This is a utility hook for fetching miscellaneous content.
 * The other hooks use this one to get content from GitHub.
 *
 * @returns The content that is fetched, a loading boolean, and a hasError boolean
 */
const useFetch = <T extends object>(url: string): [T, boolean, boolean] => {
  const [response, setResponse] = useState<T>(<T>{})
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(async resp => {
        setResponse(await resp.json())
        setLoading(false)
      })
      .catch(() => {
        setHasError(true)
        setLoading(false)
      })
  }, [url])
  return [response, loading, hasError]
}

export default useFetch
