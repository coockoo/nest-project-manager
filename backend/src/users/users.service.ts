import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

import { USER_REPOSITORY } from '../constants';

import { User } from './user.entity';

@Injectable()
export class UsersService {
  public constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: Repository<User>
  ) {}

  public async signIn(username: string, password: string) {
    const [user] = await this.userRepository.find({
      select: ['id', 'username', 'password'],
      where: { username },
    });

    if (!user) {
      throw new Error('cannot find user by given username');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('passwords does not match');
    }

    return { accessToken: 'asdflkjadsflkj', exp: Date.now() + 100000000 };
  }

  public async signUp(username: string, password: string) {
    const [user] = await this.userRepository.find({
      select: ['username'],
      where: { username },
    });

    if (user) {
      throw new Error('user by given username already exists');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await this.userRepository.save({
      username,
      password: passwordHash,
    });

    // TODO: Add common jwt access token
    return { accessToken: 'asdflkjadsflkj', exp: Date.now() + 100000000 };
  }
}
