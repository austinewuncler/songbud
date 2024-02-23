import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootEl = document.querySelector('#root');

if (rootEl) createRoot(rootEl).render(<StrictMode />);
