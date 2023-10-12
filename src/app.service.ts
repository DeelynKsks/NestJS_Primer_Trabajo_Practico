import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  // La lista de los productos, en principio solo necesito uno,
  // luego se pueden agregar más gracias al método pushProduct que está más abajo
  private products = [
    {
      id: 1,
      nombre: "Coca-Cola / 3L.",
      detalle: "Bebida gasificada",
      precio: "$1000",
      stock: 4
    }
  ];

  // Este es un contador que voy a usar en el método pushProducts, más abajo
  private idCounter = this.products.length;

  getHello(): string {
    return 'Hello World!';
  }


  // Esto simplemente trae todo el array de productos, la lista completa
  getProducts(): any{
    return this.products;
  }

  // Esto me permite traer un producto en específico a través del id del mismo
  getProductById(id: number) {
    return this.products.find(product => product.id === id)
  }
  
  // Esto me permite insertar o agregar un nuevo producto a la lista.
  // le agregué la lógica de un contador para que el id se agregue automáticamente a los productos.
  // Utilizando la constante idCounter declarada más arriba, puedo incrementarla cada vez que se agrega un producto.
  // Luego, creo un nuevo objeto de producto que incluye el id y los datos proporcionados.
  // Agrego este nuevo producto al array de productos.
  // Finalmente, devuelvo el nuevo producto que se acaba de agregar.
  pushProduct(data: any) {
    this.idCounter++;
    const newProduct = { id: this.idCounter, ...data };
    this.products.push(newProduct);
    return newProduct;
  }
  
  // Esto permite el update del producto a través del id del mismo
  updateProduct(id: number, newData: any) {
    const index = this.products.findIndex(product => product.id === id);
    
    if (index !== -1) {
      // Si el producto existe, va a actualizar el mismo con los datos correspondientes
      newData.id = id;
      this.products[index] = { ...this.products[index], ...newData};
      return this.products[index];
    } else {
      // Y si no existe, se va a crear un nuevo producto, con un id consiguiente a los que ya estén o al idCounter de arriba, en vez del que se buscó.
      // Esto a fin de que no interfiera con, precisamente, el idCounter que declaré más arriba
      this.idCounter++;
      const newProduct = { id: this.idCounter, ...newData };
      this.products.push(newProduct);
      return newProduct;
    }
  }
  

  // Esto me permite quitar un producto de la lista, a partir del id del producto en específico que se quiera borrar
  deleteProduct(id: number) {
    // Utilizo el mismo método findIndex que utilicé para el update para encontrar el índice del producto en el array de productos
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) { 
      // Y si el producto se encuentra en el array (es decir, findIndex no devuelve -1), utilizo el método splice para eliminar dicho producto
      this.products.splice(index, 1);
    }
    return this.products;
  }

}
