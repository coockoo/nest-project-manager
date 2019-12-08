import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { JWTModule } from '../jwt/jwt.module';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { userProviders } from './user.providers';

@Module({
  imports: [DatabaseModule, JWTModule],
  providers: [...userProviders, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
