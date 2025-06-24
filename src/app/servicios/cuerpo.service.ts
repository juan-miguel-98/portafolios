import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuerpoService {

  constructor() { }

  tecnologias() {
    const tecnologias: any[] = [];
    tecnologias.push({ titulo: "html", ruta: "./assets/fotos/tecnologias/html.png" });
    tecnologias.push({ titulo: "css", ruta: "./assets/fotos/tecnologias/css.png" });
    tecnologias.push({ titulo: "javascript", ruta: "./assets/fotos/tecnologias/javascript.png" });
    tecnologias.push({ titulo: "php", ruta: "./assets/fotos/tecnologias/php.png" });
    tecnologias.push({ titulo: "java", ruta: "./assets/fotos/tecnologias/java.png" });
    tecnologias.push({ titulo: "angular", ruta: "./assets/fotos/tecnologias/angular.png" });

    return tecnologias;
  }

   

  

}
