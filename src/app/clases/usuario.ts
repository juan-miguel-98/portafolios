export class Usuario {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    img: string;

    constructor(id: number, nombre: string, apellido: string, email: string, password: string,img: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.img = img;
    }

}
