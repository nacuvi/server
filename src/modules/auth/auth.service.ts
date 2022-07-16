import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(rsaPrivateKey: string) {
    const user = await this.usersService.findOne(rsaPrivateKey);
    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { rsaPrivateKey, ...result } = user;
      return result;
    }
    return null;
  }
}
