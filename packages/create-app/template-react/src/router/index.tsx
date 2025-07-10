import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Home } from '@/pages/home';

export const routes = [
  {
    path: '*',
    element: (
      <Navigate
        to="/"
        replace
      />
    ),
  },
  {
    path: '/',
    element: <Home />,
  },
];

const router = createBrowserRouter(routes);

export default router;
