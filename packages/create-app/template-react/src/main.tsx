import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';

import 'virtual:svg-icons-register';
import '@/plugins/i18n';
import '@/styles/index.css';

const root = createRoot(document.querySelector('#root') as HTMLElement);
const isDev = import.meta.env.DEV;

if (import.meta.env.VITE_APP_MOCK === 'service-worker') {
  const { worker } = await import('@/mocks/browser');

  worker.start();
}

if (isDev) {
  root.render(<App />);
} else {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
