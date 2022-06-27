import { NotFoundException } from '@nestjs/common';
import { Args, Resolver, Query } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User)
  async user(@Args('id') id: number): Promise<User> {
    const user = await this.usersService.findOneById(id);
    if (!user) throw new NotFoundException(id);
    return user;
  }
}
