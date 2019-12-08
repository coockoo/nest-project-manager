import React, { useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import auth from '../../services/auth';

import Button from '../../components/button';

import s from './styles.less';

export default function AuthenticatedLayout() {
  const handleSignOut = useCallback(() => {
    auth.clearAuthState();
  });

  return (
    <div className={s.page}>
      <div className={s.header}>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </div>
      <Switch>
        <Route exact path="/projects">
          <span>Projects page</span>
        </Route>
        <Redirect to="/projects" />
      </Switch>
    </div>
  );
}
