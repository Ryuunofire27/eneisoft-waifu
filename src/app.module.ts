import { Module } from '@nestjs/common';
import { WaifuModule } from './waifu/waifu.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [WaifuModule, ChatbotModule, DatabaseModule, ConfigModule],
})
export class AppModule {}
