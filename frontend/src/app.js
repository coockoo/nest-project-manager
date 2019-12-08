import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';

import auth from './services/auth';

import AuthenticatedLayout from './layouts/authenticated';
import AnonymousLayout from './layouts/anonymous';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(auth.isAuthenticated());
  useEffect(() => {
    const authSubscription = () => {
      setAuthenticated(auth.isAuthenticated());
    };
    auth.subscribe(authSubscription);
    return () => {
      auth.unsubscribe(authSubscription);
    };
  }, []);
  return <Router>{isAuthenticated ? <AuthenticatedLayout /> : <AnonymousLayout />}</Router>;
}

export default hot(App);
