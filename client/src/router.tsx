import { createBrowserRouter, redirect } from 'react-router-dom';

import { Home } from './screens/Home';
import { MultiPlayer } from './screens/MultiPlayer';
import { SinglePlayer } from './screens/SinglePlayer';

export const ROUTES = {
  home: '/',
  singlePlayer: '/single-player',
  multiPlayer: '/multi-player',
};

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: ROUTES.singlePlayer,
    element: <SinglePlayer />,
  },
  {
    path: ROUTES.multiPlayer,
    element: <MultiPlayer />,
  },
  {
    path: '*',
    loader: () => redirect(ROUTES.home),
  },
]);
