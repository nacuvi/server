import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';

@Injectable()
export class GraphQlConfigService implements GqlOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createGqlOptions() {
    return {
      autoSchemaFile: this.configService.get<boolean>('GQL_AUTO_SCHEMA_FILE'),
      sortSchema: this.configService.get<boolean>('GQL_SORT_SCHEMA'),
      debug: this.configService.get<boolean>('DEV'),
      playground: this.configService.get<boolean>('DEV'),
    };
  }
}
