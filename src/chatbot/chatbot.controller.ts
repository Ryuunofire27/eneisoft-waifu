import { Controller, Inject, Post, Body, Param, Get } from '@nestjs/common';
import { IChatbot } from './interfaces/chatbot.interface';
import { Model } from 'mongoose';
import { ChatbotService } from './chatbot.service';
import { CreateChatbotDto } from './dto/create-chatbot.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreateIntentDto } from '../dialogflow/dto/create-intent.dto';

@Controller('chatbots')
export class ChatbotController {
  constructor(
    private readonly service: ChatbotService,
  ){}

  @Get()
  async getChatbots(){
    const chatbots = await this.service.getChatbots();
    return {
      chatbots
    }
  }

  @Post()
  @ApiOkResponse({
    description: '',
    type: Object
  })
  async createChatbot(
    @Body() input: CreateChatbotDto
  ){
    const chatbot = this.service.createChatbot(input);
    return {
      message: 'Chatbot creada'
    }
  }

  @Post(['', '/:id'])
  @ApiOkResponse({
    description: 'Create intents',
    type: Object
  })
  async createIntent(
    @Body() input: CreateIntentDto,
    @Param('id') chatbotId: string
  ){
    const intent = await this.service.createIntent(chatbotId,input);
    return {
      message: 'Intent creado.'
    }
  }
}
