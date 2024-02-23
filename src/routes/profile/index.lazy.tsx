import { useSuspenseQuery } from '@tanstack/react-query';
import {
  ErrorComponent,
  createLazyFileRoute,
  useRouteContext,
} from '@tanstack/react-router';
import React from 'react';

const Profile = () => {
  const { profileQueryOptions } = useRouteContext({ from: '/profile/' });
  const {
    data: { display_name: displayName },
  } = useSuspenseQuery(profileQueryOptions);

  return <div>{displayName}</div>;
};

export const Route = createLazyFileRoute('/profile/')({
  component: Profile,
  errorComponent: ({ error }) => <ErrorComponent error={error} />,
});
