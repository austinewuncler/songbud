import { NextUIProvider } from '@nextui-org/react';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles.css';

const rootEl = document.querySelector('#root');

if (rootEl)
  createRoot(rootEl).render(
    <StrictMode>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </StrictMode>,
  );
