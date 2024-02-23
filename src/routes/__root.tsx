import { Outlet, createRootRoute } from '@tanstack/react-router';
import React, { Suspense, lazy } from 'react';

const TanStackRouterDevtools =
  import.meta.env.PROD ?
    () => null
  : lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    );

const Root = () => (
  <>
    <Outlet />
    <Suspense>
      <TanStackRouterDevtools />
    </Suspense>
  </>
);

export const Route = createRootRoute({ component: Root });
