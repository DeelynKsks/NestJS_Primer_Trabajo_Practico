import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()

export class AppController {


// Hice una prueba en clase trabajando con Usuarios en vez de Productos

  // private user = [
  //   {
  //     id: 1,
  //     name: "Sheila"
  //   },
  //   {
  //     id: 2,
  //     name: "Deelyn"
  //   },
  //   {
  //     id: 3,
  //     name: "Jedi Knight"
  //   }
  // ]

  private productos = [
    {
      id: 1,
      nombre: "Coca-Cola // 3L.",
      detalle: "Bebida gasificada",
      precio: "$1000",
      stock: 4
    }
  ]

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  pushProduct(@Body()) {

  }

// Este es el Get para los usuarios

  // @Get('/user::id')
  // getUser(@Param('id') id: number): any {
  //   return this.user.find(user => user.id == id)
  // }

// Este es un post, pero realmente no envía nada
  // @Post('/user')
  // postUser(@Body() datos): string {
  //   return datos
  // }



}

