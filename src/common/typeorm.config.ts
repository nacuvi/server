import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mariadb',
      host: 'localhost',
      port: 26600,
      username: 'root',
      password: '5736',
      database: 'nacuvi',
      entities: [User],
      synchronize: true,
    };
  }
}
