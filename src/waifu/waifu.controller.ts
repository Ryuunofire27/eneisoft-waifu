import { Controller, Body, BadRequestException, Post } from '@nestjs/common';
import { WaifuService } from './waifu.service';
import { ApiUseTags, ApiConsumes, ApiResponse, ApiProduces } from '@nestjs/swagger';
import { MessageDTO } from './dto/message.dto';
import { MessageResponse } from './responses/message.response';

@Controller('waifu')
@ApiUseTags('waifu')
@ApiConsumes('application/json')
@ApiProduces('application/json')
export class WaifuController {
  constructor(
    private readonly service: WaifuService
  ){}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Ok',
    type: MessageResponse
  })
  postWaifu(
    @Body() message: MessageDTO
  ){
    const status = this.service.getRandomStatus();
    return {
      message: message.message,
      status
    }
  }
}
