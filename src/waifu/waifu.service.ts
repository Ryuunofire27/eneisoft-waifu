import { Injectable } from '@nestjs/common';

@Injectable()
export class WaifuService {
  private readonly statuses = [0,1,2,3,4,5];

  constructor(){}

  getRandomStatus(): number{
    const randomNumber = Math.floor(Math.random() * this.statuses.length);
    return this.statuses[randomNumber];
  }
}
