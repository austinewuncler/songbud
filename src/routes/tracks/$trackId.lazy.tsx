import { useSuspenseQuery } from '@tanstack/react-query';
import {
  ErrorComponent,
  createLazyFileRoute,
  useRouteContext,
} from '@tanstack/react-router';
import React from 'react';

const Track = () => {
  const { trackQueryOptions } = useRouteContext({ from: '/tracks/$trackId' });
  const {
    data: { name },
  } = useSuspenseQuery(trackQueryOptions);

  return <div>{name}</div>;
};

export const Route = createLazyFileRoute('/tracks/$trackId')({
  component: Track,
  errorComponent: ({ error }) => <ErrorComponent error={error} />,
});
