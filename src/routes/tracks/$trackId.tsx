import { queryOptions } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { tracks } from '~/spotify/api';

export const Route = createFileRoute('/tracks/$trackId')({
  beforeLoad: ({ params: { trackId } }) => ({
    trackQueryOptions: queryOptions({
      queryFn: () => tracks.get(trackId),
      queryKey: ['track', trackId],
    }),
  }),

  loader: ({ context: { queryClient, trackQueryOptions } }) =>
    queryClient.ensureQueryData(trackQueryOptions),
});
