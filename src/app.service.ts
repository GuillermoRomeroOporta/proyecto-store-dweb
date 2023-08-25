import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hola mundo! estoy en el backend!!!!';
  }
}
