import { Schema, Types } from 'mongoose';

export const IntentSchema = new Schema({
  path: String,
  name: String,
  questions: [String],
  answers: [String],
  chatbotId: {type: Types.ObjectId , ref: 'Chatbot'}
});