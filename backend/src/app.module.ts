import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, ProjectsModule, UsersModule],
})
export class AppModule {}
