import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import React, { Suspense, lazy } from 'react';
import Header from '~/components/Header';

const TanStackRouterDevtools =
  import.meta.env.PROD ?
    () => null
  : lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    );

const queryClient = new QueryClient();

const Root = () => (
  <QueryClientProvider client={queryClient}>
    <Header />
    <Outlet />
    <Suspense>
      <TanStackRouterDevtools />
    </Suspense>
  </QueryClientProvider>
);

export const Route = createRootRoute({
  component: Root,
});
