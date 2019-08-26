import { Controller, Inject, Post, Body, Param, Get } from '@nestjs/common';
import { IChatbot } from './interfaces/chatbot.interface';
import { Model } from 'mongoose';
import { ChatbotService } from './chatbot.service';
import { CreateChatbotDto } from './dto/create-chatbot.dto';
import { ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import { CreateIntentDto } from '../dialogflow/dto/create-intent.dto';

@Controller('chatbots')
@ApiUseTags('chatbot')
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
    const chatbot = await this.service.createChatbot(input);
    return {
      message: 'Chatbot creada'
    }
  }

  @Post('/intents')
  @ApiOkResponse({
    description: 'Create intents',
    type: Object
  })
  async createIntent(
    @Body() input: CreateIntentDto,
  ){
    const intent = await this.service.createIntent(undefined, input);
    return {
      message: 'Intent creado.'
    }
  }

  @Post('/{id}/intents')
  @ApiOkResponse({
    description: 'Create intents',
    type: Object
  })
  async createIntentInChat(
    @Body() input: CreateIntentDto,
    @Param('id') chatbotId?: string
  ){
    console.log('Try to create intent')
    //const intent = await this.service.createIntent(chatbotId,input);
    return {
      message: 'Intent creado.'
    }
  }
}
