import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class MessageDTO{

  @ApiModelProperty({
    description: 'The message to send'
  })
  @IsString({
    message: 'Message should be a string'
  })
  @IsNotEmpty({
    message: 'Message is required'
  })
  readonly message: string;
}