import React, { useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import auth from '../../services/auth';

import Button from '../../components/button';

import EditProjectPage from '../../pages/edit-project';
import ProjectsPage from '../../pages/projects';

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
        <Route exact path="/projects/:id">
          <EditProjectPage />
        </Route>
        <Route exact path="/projects">
          <ProjectsPage />
        </Route>
        <Redirect to="/projects" />
      </Switch>
    </div>
  );
}
