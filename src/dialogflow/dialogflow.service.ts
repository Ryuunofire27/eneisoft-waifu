import { Injectable, Inject } from "@nestjs/common";
import { DialogflowHelper } from "./dialogflow.helper";
import { IChatbot } from "../chatbot/interfaces/chatbot.interface";
import { Model } from 'mongoose';
import { IIntent } from "./interfaces/intent.interface";
import { CreateIntentDto } from "./dto/create-intent.dto";

@Injectable()
export class DialogflowService{
  constructor(
    @Inject('INTENT_MODEL')
    private readonly model: Model<any>,
    private readonly helper: DialogflowHelper,
  ){}

  async createIntent(chatbot: IChatbot, body: CreateIntentDto): Promise<IIntent>{
    const intent = await this.helper.createIntent(chatbot, body);
    const newIntent = new this.model({
      path: intent[0].name,
      name: body.displayName,
      questions: body.questions,
      answers: body.answers,
      chatbotId: chatbot._id.toString(),
    })
    return await newIntent.save();
  }
}