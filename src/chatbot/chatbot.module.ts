import { Module } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ChatbotController } from './chatbot.controller';
import { ChatbotProviders } from './chatbot.provider';
import { DatabaseModule } from '../database/database.module';
import { DialogflowModule } from '../dialogflow/dialogflow.module';

@Module({
  imports: [
    DatabaseModule,
    DialogflowModule,
  ],
  providers: [
    ...ChatbotProviders,
    ChatbotService
  ],
  controllers: [ChatbotController],
  exports: [
    ChatbotService,
  ]
})
export class ChatbotModule {}
