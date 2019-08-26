import { ApiModelProperty } from "@nestjs/swagger";

export class CreateChatbotDto{
  
  @ApiModelProperty({
    description: 'Chatbot name',
    type: String,
  })
  name: string;

  @ApiModelProperty({
    description: 'Chatbot link',
    type: String,
  })
  dflink: string;

  @ApiModelProperty({
    description: 'Chatbot projectId',
    type: String,
  })
  projectId: string;

  @ApiModelProperty({
    description: 'Chatbot client email',
    type: String,
  })
  clientEmail: string;

  @ApiModelProperty({
    description: 'Chatbot private key',
    type: String
  })
  privateKey: string;
}