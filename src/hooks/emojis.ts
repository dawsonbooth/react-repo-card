import { Endpoints } from '@octokit/types'
import useFetch from './fetch'

/**
 * This is a hook for fetching the [emoji names](https://api.github.com/emojis) from the official GitHub API.
 *
 * @returns The content that is fetched, a loading boolean, and a hasError boolean
 */
const useEmojis = () =>
  useFetch<Endpoints['GET /emojis']['response']>('https://api.github.com/emojis')

export default useEmojis
