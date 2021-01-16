import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { AppRouter } from './AppRouter';

export const App: FC = () => (
  <>
    <div>
      <Link to='posts'>Post</Link>
      <Link to='users'>User</Link>
    </div>
    <AppRouter />
  </>
);
