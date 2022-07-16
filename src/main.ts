import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { Base } from './common/core/classes/base.class';

global.appRoot = __dirname;
class Bootstrap extends Base {
  async start(): Promise<void> {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );
    await app.listen(3000, '0.0.0.0');
  }
}
new Bootstrap().start();
