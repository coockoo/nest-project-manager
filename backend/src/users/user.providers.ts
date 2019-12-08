import { Connection, Repository } from 'typeorm';
import { User } from './user.entity';

import { DATABASE_CONNECTION, USER_REPOSITORY } from '../constants';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(User);
    },
    inject: [DATABASE_CONNECTION],
  },
];
