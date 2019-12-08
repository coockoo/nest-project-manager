import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { UsersService } from './users.service';
import { SignInDto } from './dto/sign-in.dto';

@Controller('users')
export class UsersController {
  public constructor(private readonly usersService: UsersService) {}

  @Post('/sign-in')
  public async signIn(@Body() dto: SignInDto) {
    return this.usersService.signIn(dto.username, dto.password);
  }

  @Post('/sign-up')
  public async signUp(@Body() dto: SignInDto) {
    // Same DTO here
    return this.usersService.signUp(dto.username, dto.password);
  }
}
