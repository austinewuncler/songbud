import { useQuery } from '@tanstack/react-query';
import { search } from '~/spotify/api';
import useDebounce from './useDebounce';

const useSearch = (query: string) => {
  const debouncedQuery = useDebounce(query, 1000);
  const { data, isLoading } = useQuery({
    enabled: debouncedQuery.length > 2,
    queryFn: async () => {
      const { tracks } = await search(debouncedQuery, ['track']);

      return tracks;
    },
    queryKey: ['search', debouncedQuery],
  });

  return { data, isLoading };
};
export default useSearch;
