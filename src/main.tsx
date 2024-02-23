import { NextUIProvider } from '@nextui-org/react';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const rootEl = document.querySelector('#root');

if (rootEl)
  createRoot(rootEl).render(
    <StrictMode>
      <NextUIProvider>songbud</NextUIProvider>
    </StrictMode>,
  );
