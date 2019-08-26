import { Module } from '@nestjs/common';
import { WaifuController } from './waifu.controller';
import { WaifuService } from './waifu.service';
import { ChatbotModule } from '../chatbot/chatbot.module';

@Module({
  imports: [ChatbotModule],
  controllers: [WaifuController],
  providers: [WaifuService]
})
export class WaifuModule {}
