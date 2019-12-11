import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import auth from '../../services/auth';
import api from '../../services/api';

import Button from '../../components/button';

import s from './styles.less';

// This is a duplicated page of sign-in. And I'm fully aware of it
// For demo (MVP) purposes I've decided to leave it as is.
export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(() => {
    const doSignUp = async () => {
      const authState = await api.post('/users/sign-up', { username, password });
      auth.setAuthState(authState);
    };
    doSignUp();
  });

  return (
    <div className={s.page}>
      <h1>Sign Up</h1>
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
          Sign Up
        </Button>
        <div className={s.signUp}>
          or&nbsp;<Link to="/sign-in">Sign In</Link>
        </div>
      </form>
    </div>
  );
}
