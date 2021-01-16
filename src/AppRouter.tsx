import { RouteConfig, RouterOutlet } from '@components/RouterOutlet';
import loadable from '@loadable/component';
import React, { VFC } from 'react';

const routes: RouteConfig = [
  {
    path: '/users',
    component: loadable(() => import('@app/features/user')),
    exact: true,
  },
  {
    path: '/posts',
    component: loadable(() => import('@app/features/post')),
  },
];

export const AppRouter: VFC = () => {
  return <RouterOutlet routes={routes} fallback={<div>Loading...</div>} />;
};
