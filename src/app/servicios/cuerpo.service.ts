import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuerpoService {

  constructor() { }

  tecnologias() {
    const tecnologias: any[] = [];
    tecnologias.push({ titulo: "html", ruta: "./assets/fotos/html.png" });
    tecnologias.push({ titulo: "css", ruta: "./assets/fotos/css.jpg" });
    tecnologias.push({ titulo: "javascript", ruta: "./assets/fotos/javascript.png" });
    tecnologias.push({ titulo: "php", ruta: "./assets/fotos/php.jpg" });
    tecnologias.push({ titulo: "boostrap", ruta: "./assets/fotos/boostrap.jpg" });
    tecnologias.push({ titulo: "angular", ruta: "./assets/fotos/angular.png" });

    return tecnologias;
  }

   

  

}
