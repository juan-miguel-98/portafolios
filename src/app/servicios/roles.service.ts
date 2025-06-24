import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  roles = [
    { id: 1, nombre: 'Administrador', descripcion: 'Acceso completo al sistema' },
    { id: 2, nombre: 'Editor', descripcion: 'Puede editar contenido' },
    { id: 3, nombre: 'Usuario', descripcion: 'Acceso limitado al sistema' },
    { id: 4, nombre: 'Invitado', descripcion: 'Acceso solo de lectura' }
  ];

  constructor() {}

  getRoles() { return this.roles; }

  getRoleById(id: number) { return this.roles.find(role => role.id === id);}

  getRoleByName(name: string) { return this.roles.find(role => role.nombre === name); }

}
