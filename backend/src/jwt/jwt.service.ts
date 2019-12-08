import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../config';

import { User } from '../users/user.entity';

@Injectable()
export class JWTService {
  public async sign(user: User) {
    const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7; // A week
    const accessToken = await jwt.sign(
      {
        exp,
        data: { id: user.id },
      },
      JWT_SECRET
    );
    return { accessToken, exp: exp * 1000 };
  }
}
