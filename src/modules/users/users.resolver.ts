import { NotFoundException } from '@nestjs/common';
import { Args, Resolver, Query } from '@nestjs/graphql';
import { UserEntity } from 'src/entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserEntity)
  async user(
    @Args('rsaPrivateKey') rsaPrivateKey: string,
  ): Promise<UserEntity> {
    const user = await this.usersService.findOne(rsaPrivateKey);
    if (!user) throw new NotFoundException(rsaPrivateKey);
    return user;
  }
}
