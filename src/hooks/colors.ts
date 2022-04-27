import useFetch from './fetch'

/**
 * This is a hook for fetching the GitHub colors from [ozh/github-colors](https://raw.githubusercontent.com/ozh/github-colors/master/colors.json).
 *
 * @returns The content that is fetched, a loading boolean, and a hasError boolean
 */
const useColors = () =>
  useFetch<{
    [key: string]:
      | {
          color: string
          url: string
        }
      | undefined
  }>('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json')

export default useColors
