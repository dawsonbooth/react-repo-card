import { Endpoints } from '@octokit/types'
import useFetch from './fetch'

/**
 * This is a hook for fetching the [repository information](https://api.github.com/repos/) from the official GitHub API.
 *
 * @returns The content that is fetched, a loading boolean, and a hasError boolean
 */
const useRepo = (username: string, repository: string) =>
  useFetch<Endpoints['GET /repos/{owner}/{repo}']['response']['data']>(
    `https://api.github.com/repos/${username}/${repository}`
  )

export default useRepo
