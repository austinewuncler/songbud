import { queryOptions } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { currentUser } from '~/spotify/api';

export const Route = createFileRoute('/profile/')({
  beforeLoad: () => ({
    profileQueryOptions: queryOptions({
      queryFn: () => currentUser.profile(),
      queryKey: ['profile'],
    }),
  }),

  loader: ({ context: { profileQueryOptions, queryClient } }) =>
    queryClient.ensureQueryData(profileQueryOptions),
});
