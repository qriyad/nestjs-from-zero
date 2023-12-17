import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles/roles.guard';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    },
  ],
})
export class AppModule {}
