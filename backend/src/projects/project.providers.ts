import { Connection, Repository } from 'typeorm';
import { Project } from './project.entity';

import { DATABASE_CONNECTION, PROJECT_REPOSITORY } from '../constants';

export const projectProviders = [
  {
    provide: PROJECT_REPOSITORY,
    useFactory: (connection: Connection) => {
      return connection.getRepository(Project);
    },
    inject: [DATABASE_CONNECTION],
  },
];
