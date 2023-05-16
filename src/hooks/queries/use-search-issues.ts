import { useDebounce } from 'use-debounce'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { searchIssues } from '../../services/github'

export const SEARCH_ISSUES_KEY = ['search-issues']

export function useSearchIssues(search?: string) {
  const [_search] = useDebounce(search, 1000)

  const query = useQuery({
    queryKey: [SEARCH_ISSUES_KEY, _search],
    queryFn: ({ signal }) => {
      return searchIssues(
        'lucasvitalmelo',
        '03-desafio-github-blog-react-2023',
        _search,
        { signal },
      )
    },
    onError: (err: Error) => {
      toast.error(err.message)
    },
  })

  return query
}
