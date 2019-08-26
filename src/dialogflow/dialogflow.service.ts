import { Injectable, Inject, BadRequestException } from "@nestjs/common";
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
    const existingIntent = await this.model.findOne({ chatbotId: chatbot._id, name: body.displayName });
    if(existingIntent) throw new BadRequestException('Ya existe un intent con ese nombre.');
    const intent = await this.helper.createIntent(chatbot, body);
    const newIntent = new this.model({
      path: intent[0].name,
      name: body.displayName,
      questions: body.questions,
      answers: body.answers,
      chatbotId: chatbot._id.toString(),
      status: body.status,
    });
    return await newIntent.save();
  }

  async getResponseIntent(chatbot: IChatbot, question): Promise<{ answer: string, status: number }>{
    const sessionClient = this.helper.getSessionClient(chatbot);
    const sessionPath = this.helper.getSessionPath(sessionClient, chatbot.projectId);

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: question,
          languageCode: 'es-PE'
        }
      }
    }

    const responses = await sessionClient.detectIntent(request);
    const response = responses[0];
    if(response){
      const intent = response.queryResult.intent;
      const status = (await this.model.findOne({ chatbotId: chatbot._id.toString(), name: intent.displayName })).status || 1;
      return {
        answer: response.queryResult.fulfillmentText,
        status
      }
    }
    return {
      answer: '¿Que dices oni-chan?',
      status: 1
    };
  }
}