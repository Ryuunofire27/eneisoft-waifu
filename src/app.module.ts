import { Module } from '@nestjs/common';
import { WaifuModule } from './waifu/waifu.module';

@Module({
  imports: [WaifuModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
