import React from 'react';

import s from './styles.less';

export default function LogInPage() {
  return (
    <div className={s.page}>
      <form>
        <div className={s.formGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className={s.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
