import { Schema } from 'mongoose';

export const ChatbotSchema = new Schema({
  name: String,
  icon: String,
  dflink: String,
  projectId: String,
  clientEmail: String,
  privateKey: String,
})