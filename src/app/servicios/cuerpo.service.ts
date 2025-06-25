import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuerpoService {

  constructor() { }

  tecnologias() {
    const tecnologias: any[] = [];
    tecnologias.push({ titulo: "html", ruta: "./assets/fotos/tecnologias/html.png" },
      { titulo: "css", ruta: "./assets/fotos/tecnologias/css.png" },
      { titulo: "javascript", ruta: "./assets/fotos/tecnologias/javascript.png" },
      { titulo: "php", ruta: "./assets/fotos/tecnologias/php.png" },
      { titulo: "java", ruta: "./assets/fotos/tecnologias/java.png" },
      { titulo: "angular", ruta: "./assets/fotos/tecnologias/angular.png" });

    return tecnologias;
  }

   

  

}
