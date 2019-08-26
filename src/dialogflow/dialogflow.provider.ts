import { Dialogflow } from "./classes/dialogflow.class";
import { Connection, Model } from 'mongoose';
import { IntentSchema } from "./intent.schema";

export const DialogflowProviders = [
  {
    provide: 'INTENT_MODEL',
    useFactory: (connection: Connection): Model<any> => connection.model('ChatbotIntent', IntentSchema),
    inject: ['DATABASE_CONNECTION']
  }
]