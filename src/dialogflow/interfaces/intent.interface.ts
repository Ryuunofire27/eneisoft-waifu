
export interface IIntent{
  _id: string;

  path: string;

  name: string;

  questions: [string];

  answers: [string];

  chatbotId: string;
}