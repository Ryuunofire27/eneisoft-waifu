import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';
import { DialogflowService } from '../dialogflow/dialogflow.service';
import { CreateChatbotDto } from './dto/create-chatbot.dto';
import { CreateIntentDto } from '../dialogflow/dto/create-intent.dto';
import { IIntent } from '../dialogflow/interfaces/intent.interface';

@Injectable()
export class ChatbotService {
  constructor(
    @Inject('CHATBOT_MODEL')
    private readonly model: Model<any>,
    private readonly intentService: DialogflowService,
  ){}

  async createChatbot(chatbotData: CreateChatbotDto){
    const newChatbot = new this.model(chatbotData);
    return await newChatbot.save();
  }

  async getChatbots(){
    return await this.model.find();
  }

  async getChatbot(chatbotId?: string){
    if(chatbotId) return await this.model.findById(chatbotId);
    return (await this.model.find().limit(1))[0];
  }

  async createIntent(chatbotId: string, intentData: CreateIntentDto): Promise<IIntent>{
    const chatbot = await this.getChatbot(chatbotId);
    if (!chatbot) throw new BadRequestException('No existe el chatbot especificado.');
    const newIntent = await this.intentService.createIntent(chatbot, intentData);
    return newIntent;
  }
}
