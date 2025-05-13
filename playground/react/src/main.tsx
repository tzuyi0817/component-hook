import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const root = createRoot(document.querySelector('#root') as HTMLElement);
const isDev = import.meta.env.DEV;

if (isDev) {
  root.render(<App />);
} else {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
