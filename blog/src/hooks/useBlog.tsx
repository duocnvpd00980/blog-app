import { useQuery } from '@tanstack/react-query'

export const useBlog = () => {
  return useQuery({
    queryKey: ['blog'],
    queryFn: () => console.log('hello world'),
  })
}
