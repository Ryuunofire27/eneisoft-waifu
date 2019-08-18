import { Test, TestingModule } from '@nestjs/testing';
import { WaifuController } from './waifu.controller';

describe('Waifu Controller', () => {
  let controller: WaifuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WaifuController],
    }).compile();

    controller = module.get<WaifuController>(WaifuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
