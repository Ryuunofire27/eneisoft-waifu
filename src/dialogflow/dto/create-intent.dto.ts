import { ApiModelProperty } from "@nestjs/swagger";

export class CreateIntentDto{

  @ApiModelProperty({
    description: 'Intent\'s name, should be unique.',
    type: String,
  })
  displayName: string;

  @ApiModelProperty({
    description: 'Intent\'s questions.',
    type: [String]
  })
  questions: [string];

  @ApiModelProperty({
    description: 'Intent\'s answers.',
    type: [String]
  })
  answers: [string];
}