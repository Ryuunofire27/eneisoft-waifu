import { Controller, Body, BadRequestException, Post } from '@nestjs/common';
import { WaifuService } from './waifu.service';
import { ApiUseTags, ApiConsumes, ApiResponse, ApiProduces } from '@nestjs/swagger';
import { MessageDTO } from './dto/message.dto';
import { MessageResponse } from './responses/message.response';
import { ChatbotService } from '../chatbot/chatbot.service';

@Controller('waifu')
@ApiUseTags('waifu')
@ApiConsumes('application/json')
@ApiProduces('application/json')
export class WaifuController {
  constructor(
    private readonly service: WaifuService,
    private readonly chatbotService: ChatbotService,
  ){}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Ok',
    type: MessageResponse
  })
  async postWaifu(
    @Body() message: MessageDTO
  ){
    const answer = await this.chatbotService.getChatbotResponse(undefined, message.message);

    return answer;
  }
}
