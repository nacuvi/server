import { Request, UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { UserEntity } from 'src/entities/user.entity';

@Resolver(() => UserEntity)
export class AuthResolver {
  @UseGuards(AuthGuard('local'))
  @Query(() => UserEntity)
  async login(@Request() request) {
    return request.user;
  }
}
