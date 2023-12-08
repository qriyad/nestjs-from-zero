import { Module, Global } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
@Global()
@Module({
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService]
})
export class CatsModule {
    constructor(private catsService: CatsService){}
}
