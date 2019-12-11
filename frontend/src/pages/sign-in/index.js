import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import auth from '../../services/auth';
import api from '../../services/api';

import Button from '../../components/button';

import s from './styles.less';

export default function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(() => {
    const doSignIn = async () => {
      const authState = await api.post('/users/sign-in', { username, password });
      auth.setAuthState(authState);
    };
    doSignIn();
  });

  return (
    <div className={s.page}>
      <h1>Sign In</h1>
      <form>
        <div className={s.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={s.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button onClick={handleSubmit} className={s.submit}>
          Sign In
        </Button>
        <div className={s.signUp}>
          or&nbsp;<Link to="/sign-up">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}
