import { Controller, Get, Post, Patch, Body, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()

export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Este decorador Get y esta ruta traen toda la lista de productos
  @Get('product')
  getList(): any {
    return this.appService.getProducts()
  }

  // Este decorador Get y esta ruta traen un producto en específico a través del id
  // ejemplo: http://localhost:3000/product/1
  @Get('product/:id')
  getProduct(@Param('id') id: number) {
    const idNumber = Number(id)
    return this.appService.getProductById(idNumber)
  }

  // Este decorador Post y esta ruta agregan un producto más a la lista, tomando los datos o la estrucutra a través del body
  @Post('product')
  sendProduct(@Body() data: any) {
    return this.appService.pushProduct(data)
  }

  // Este decorador Patch y esta ruta actualizan un producto en específico a través del id, y,
  // si no existe dicho producto, lo va a crear
  @Patch('product/:id')
  updateProduct(@Param('id') id: number, @Body() newData: any) {
    const idNumber = Number(id)
    return this.appService.updateProduct(idNumber, newData)
  }

  // Este decorador Delete y esta ruta eliminan un producto en específico a través del id, si existe dicho producto,
  // sino existe el producto, por razones que entiendo pero desconozco, se rompe la aplicación
  @Delete('product/:id')
  deleteProduct(@Param('id') id: number) {
    const idNumber = Number(id)
    return this.appService.deleteProduct(idNumber)
  }
}
