import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos  = [
    { id: 1, nombre: 'Producto A', descripcion: 'Descripción del Producto A', precio: 100 },
    { id: 2, nombre: 'Producto B', descripcion: 'Descripción del Producto B', precio: 200 },
    { id: 3, nombre: 'Producto C', descripcion: 'Descripción del Producto C', precio: 300 },
    { id: 4, nombre: 'Producto D', descripcion: 'Descripción del Producto D', precio: 400 },
    { id: 5, nombre: 'Producto E', descripcion: 'Descripción del Producto E', precio: 500 },
    { id: 6, nombre: 'Producto F', descripcion: 'Descripción del Producto F', precio: 600 },
    { id: 7, nombre: 'Producto G', descripcion: 'Descripción del Producto G', precio: 700 },
    { id: 8, nombre: 'Producto H', descripcion: 'Descripción del Producto H', precio: 800 },
    { id: 9, nombre: 'Producto I', descripcion: 'Descripción del Producto I', precio: 900 },
    { id: 10, nombre: 'Producto J', descripcion: 'Descripción del Producto J', precio: 1000 }
  ];

  constructor() { }

  getProductos() {
    return this.productos;
  }
  getProductoById(id: number) {
    return this.productos.find(producto => producto.id === id);
  }
  getProductoByNombre(nombre: string) {
    return this.productos.find(producto => producto.nombre === nombre);
  }
  updateProducto(id: number, producto: any) {
    const index = this.productos.findIndex(p => p.id === id);
    if (index !== -1) {
      this.productos[index] = { ...this.productos[index], ...producto };
      return true;
    }
    return false;
  }
  deleteProducto(id: number) {
    this.productos = this.productos.filter(producto => producto.id !== id);
    return this.productos;    
  }
  addProducto(producto: any) {
    const newId = this.productos.length > 0 ? Math.max(...this.productos.map(p => p.id)) + 1 : 1;
    const newProducto = { id: newId, ...producto };
    this.productos.push(newProducto);
    return newProducto;
  }
}
