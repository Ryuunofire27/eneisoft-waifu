import { Injectable } from "@nestjs/common";
import * as dialogflow from 'dialogflow';
import { IChatbot } from "../chatbot/interfaces/chatbot.interface";
import { CreateIntentDto } from "./dto/create-intent.dto";

@Injectable()
export class DialogflowHelper{
  constructor(){}

  getIntentsClient(chatbot: IChatbot){
    const credentials = {
      credentials: {
        client_email: chatbot.clientEmail,
        private_key: chatbot.privateKey,
      },
      projectId: chatbot.projectId,
    }

    return new dialogflow.IntentsClient(credentials);
  }

  getProjectAgentPaht(intentsClient, projectId){
    return intentsClient.projectAgentPath(projectId);
  }

  async createIntent(chatbot: IChatbot, body: CreateIntentDto): Promise<any>{
    const { displayName, questions, answers } = body;
    const intentsClient = this.getIntentsClient(chatbot);
    const projectAgentPath = this.getProjectAgentPaht(intentsClient, chatbot.projectId);

    const trainingPhrases = [];

    questions.forEach(trainingPhrasesPart => {
      const part = {
        text: trainingPhrasesPart,
      };

      // Here we create a new training phrase for each provided part.
      const trainingPhrase = {
        type: 'EXAMPLE',
        parts: [part],
      };
      trainingPhrases.push(trainingPhrase);
    });

    const messageText = {
      text: answers,
    };

    const message = {
      text: messageText,
    };

    const intent = {
      displayName: displayName,
      trainingPhrases: trainingPhrases,
      messages: [message],
    };

    const createIntentRequest = {
      parent: projectAgentPath,
      intent: intent,
    };

    // Create the intent
    const responses = await intentsClient.createIntent(createIntentRequest);
    return responses
    // [END dialogflow_create_intent]
  }

  async deleteIntent(chatbot: IChatbot, intentPath: string): Promise<void>{
    const intentsClient = this.getIntentsClient(chatbot);

    const request = { name: intentPath };

    await intentsClient.deleteIntent(request);
  }
}
