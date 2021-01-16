import { RouteConfig, RouterOutlet } from '@components/RouterOutlet';
import React, { FC } from 'react';
import loadable from '@loadable/component';
import { Link } from 'react-router-dom';

const routes: RouteConfig[] = [
  {
    path: '/users',
    component: loadable(() => import('@app/features/user')),
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
