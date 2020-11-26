import { RouteConfig, RouterOutlet } from '@components/RouterOutlet';
import React, { FC, lazy } from 'react';
import { Link } from 'react-router-dom';

const routes: RouteConfig[] = [
  {
    path: '/posts',
    component: lazy(() => import('@app/features/post')),
    exact: true,
  },
  {
    path: '/users',
    component: lazy(() => import('@app/features/user')),
    exact: true,
  },
];

export const App: FC = () => (
  <>
    <div>
      <Link to='posts'>Post</Link>
      <Link to='users'>User</Link>
    </div>
    <RouterOutlet routes={routes} fallback={<div>Loading...</div>} />
  </>
);
