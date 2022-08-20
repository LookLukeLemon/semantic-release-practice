import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('Test 11');
    return 'Hello World!!!!';
  }
}
