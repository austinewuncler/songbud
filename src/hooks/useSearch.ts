import { Page, Track } from '@spotify/web-api-ts-sdk';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useDeferredValue } from 'react';
import { search } from '~/spotify/api';
import useDebounce from './useDebounce';

const useSearch = (query: string) => {
  const debouncedQuery = useDebounce(query, 500);
  const deferredQuery = useDeferredValue(debouncedQuery);
  const {
    data: { items },
  } = useSuspenseQuery({
    queryFn: async () => {
      if (deferredQuery.length > 0) {
        const { tracks } = await search(deferredQuery, ['track']);
        return tracks;
      }
      const tracks: Page<Track> = {
        href: '',
        items: [],
        limit: 0,
        next: null,
        offset: 0,
        previous: null,
        total: 0,
      };
      return tracks;
    },
    queryKey: ['search', deferredQuery.length],
  });

  return items;
};
export default useSearch;
