import React, { FC, Suspense } from 'react';
import { Switch, Route, RouteProps } from 'react-router-dom';

export interface RouterOutletProps {
  baseUrl?: string;
  routes: RouteProps[];
  fallback?: React.ReactNode;
}

export type RouteConfig = RouteProps[];

const resovePath = (baseUrl?: string) => (path: RouteProps['path']) => `${baseUrl ?? ''}${path ?? ''}`;

export const RouterOutlet: FC<RouterOutletProps> = ({ baseUrl, routes, fallback }) => {
  return (
    <Suspense fallback={fallback ?? null}>
      <Switch>
        {routes.map(({ path, ...rest }, index) => (
          <Route {...rest} path={resovePath(baseUrl)(path)} key={index} />
        ))}
      </Switch>
    </Suspense>
  );
};
