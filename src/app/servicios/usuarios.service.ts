import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

   usuarios :Usuario[] = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', email: 'juan@correo.es',password: 'juan', img: "../src/assets/tienda/usuario.png" },
    { id: 2, nombre: 'Ana', apellido: 'Gómez', email: 'ana@correo.es',password: 'ana', img: "../src/assets/tienda/usuario.png" },
    { id: 3, nombre: 'Luis', apellido: 'Martínez', email: 'luis@correo.es',password: 'luis', img: "../src/assets/tienda/usuario.png" },
    { id: 4, nombre: 'María', apellido: 'López', email: 'maria@correo.es',password: 'maria', img: "../src/assets/tienda/usuario.png" },
    { id: 5, nombre: 'Carlos', apellido: 'Hernández', email: 'carlos@correo.es',password: 'carlos', img: "../src/assets/tienda/usuario.png" },
    { id: 6, nombre: 'Laura', apellido: 'García', email: 'laura@correo.es',password: 'laura', img: "../src/assets/tienda/usuario.png" },
    { id: 7, nombre: 'Pedro', apellido: 'Sánchez', email: 'pedro@correo.es',password: 'pedro', img: "../src/assets/tienda/usuario.png" },
    { id: 8, nombre: 'Lucía', apellido: 'Ramírez', email: 'lucia@correo.es',password: 'lucia', img: "../src/assets/tienda/usuario.png" },
    { id: 9, nombre: 'Javier', apellido: 'Torres', email: 'javiar@correo.es',password: 'javiar', img: "../src/assets/tienda/usuario.png" },
    { id: 10, nombre: 'Sara', apellido: 'Vázquez', email: 'sara@correo.es',password: 'sara', img: "../src/assets/tienda/usuario.png" }
    ]

  constructor() { }

  getUsuarios() {
    return this.usuarios;
  }

  getUsuariosId(id: number) {
    return this.usuarios.find(usuario => usuario.id === id);
  }

  getUsuariosNombre(nombre: string) {
    return this.usuarios.find(usuario => usuario.nombre === nombre);
  }

  addUsuario(usuario: any) {
    const newId = this.usuarios.length > 0 ? Math.max(...this.usuarios.map(u => u.id)) + 1 : 1;
    const newUsuario = { id: newId, ...usuario };
    this.usuarios.push(newUsuario);
    return newUsuario;
  }

  updateUsuario(id: number, usuario: any) {
    const index = this.usuarios.findIndex(u => u.id === id);
    if (index !== -1) {
      this.usuarios[index] = { ...this.usuarios[index], ...usuario };
      return true;
    }
    return false;
  }

  deleteUsuario(id: number) {
   this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
   return this.usuarios;    
  }
}
