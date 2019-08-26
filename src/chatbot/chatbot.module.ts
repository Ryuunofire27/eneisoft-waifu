import { Module } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ChatbotController } from './chatbot.controller';
import { ChatbotProviders } from './chatbot.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    DatabaseModule,
  ],
  providers: [
    ...ChatbotProviders,
    ChatbotService
  ],
  controllers: [ChatbotController]
})
export class ChatbotModule {}
