import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const root = document.querySelector('#root') as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
