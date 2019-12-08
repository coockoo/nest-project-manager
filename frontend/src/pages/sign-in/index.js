import React, { useCallback } from 'react';

import auth from '../../services/auth';

import Button from '../../components/button';

import s from './styles.less';

export default function LogInPage() {
  const handleSubmit = useCallback(() => {
    auth.setAuthState({ accessToken: 'asdf', exp: Date.now() + 100000000 });
  });

  return (
    <div className={s.page}>
      <form>
        <div className={s.formGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" autoComplete="username" />
        </div>
        <div className={s.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" autoComplete="current-password" />
        </div>
        <Button onClick={handleSubmit} className={s.submit}>
          Sign In
        </Button>
      </form>
    </div>
  );
}
