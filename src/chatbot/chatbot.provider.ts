import { ChatbotSchema } from "./chatbot.schema";
import { Connection } from 'mongoose';

export const ChatbotProviders = [
  {
    provide: 'CHATBOT_MODEL',
    useFactory: (connection: Connection) => connection.model('Chatbot', ChatbotSchema),
    inject: ['DATABASE_CONNECTION']
  }
]