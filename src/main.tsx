import { NextUIProvider } from '@nextui-org/react';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { routeTree } from './routeTree.gen';
import './styles.css';

const router = createRouter({ routeTree });
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootEl = document.querySelector('#root');

if (rootEl)
  createRoot(rootEl).render(
    <StrictMode>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </StrictMode>,
  );
