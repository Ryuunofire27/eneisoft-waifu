import { Schema, Types } from 'mongoose';

export const IntentSchema = new Schema({
  path: String,
  name: String,
  questions: [String],
  answers: [String],
  chatbotId: {type: Types.ObjectId , ref: 'Chatbot'},
  // 0 -> triste | 1 -> preocupado | 2 -> normal | 3 -> alegre, sonrojada | 4 -> asqueada | 5 -> molesta
  status: { type: Number },
});