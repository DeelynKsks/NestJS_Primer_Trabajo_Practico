import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  pushProduct(data, productList) {
    return productList.push(data)
  }

  // getUser(): string {
  //   return 
  // }

  // postUser() {
  //   return
  // }
}
