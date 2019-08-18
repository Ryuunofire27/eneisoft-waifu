import { ApiModelProperty } from "@nestjs/swagger";

export class MessageResponse{

  @ApiModelProperty({
    description: 'The message sended'
  })
  readonly message: string;

  @ApiModelProperty({
    description: 'Random status generated',
    enum: [0,1,2,3,4,5]
  })
  readonly status: number;
}