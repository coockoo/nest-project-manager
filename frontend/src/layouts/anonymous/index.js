import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignInPage from '../../pages/sign-in';
import SignUpPage from '../../pages/sign-up';

export default function AnonymousLayout() {
  return (
    <Switch>
      <Route exact path="/sign-in">
        <SignInPage />
      </Route>
      <Route exact path="/sign-up">
        <SignUpPage />
      </Route>
      <Redirect to="/sign-in" />
    </Switch>
  );
}
