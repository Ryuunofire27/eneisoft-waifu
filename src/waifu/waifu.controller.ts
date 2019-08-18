import { Controller, Body, BadRequestException } from '@nestjs/common';
import { WaifuService } from './waifu.service';

@Controller('waifu')
export class WaifuController {
  constructor(
    private readonly service: WaifuService
  ){}

  postWaifu(
    @Body('message') message: string
  ){
    if(!message) throw new BadRequestException('El mensaje es requerido.');
    const status = this.service.getRandomStatus();
    return {
      message,
      status
    }
  }
}
