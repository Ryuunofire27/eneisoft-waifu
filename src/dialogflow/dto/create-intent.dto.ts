import { ApiModelProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumberString, IsArray, IsNumber } from 'class-validator';

export class CreateIntentDto{

  @ApiModelProperty({
    description: 'Intent\'s name, should be unique.',
    type: String,
  })
  @IsNotEmpty({
    message: 'El nombre del intent es requerido.'
  })
  displayName: string;

  @ApiModelProperty({
    description: 'Intent\'s questions.',
    type: [String]
  })
  @IsNotEmpty({
    message: 'Las preguntas del intent son requeridas.'
  })
  @IsArray({
    message: 'Las preguntas deben ser un arreglo de strings',
  })
  questions: [string];

  @ApiModelProperty({
    description: 'Intent\'s answers.',
    type: [String]
  })
  @IsNotEmpty({
    message: 'Las respuestas del intent son requeridas.'
  })
  @IsArray({
    message: 'Las respuestas deben ser un arreglo de strings',
  })
  answers: [string];

  @ApiModelProperty({
    description: 'Intent\'s status.',
    type: Number,
    enum: [
      0,
      1,
      2,
      3
      ,4
      ,5
    ]
  })
  @IsNotEmpty({
    message: 'El estado del intetn es requerido.'
  })
  @IsNumber({
    allowNaN: true,
  },
  {
    message: 'El estado debe ser numerico.'
  })
  status: number
}