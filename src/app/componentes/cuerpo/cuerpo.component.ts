import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  public tecnologias:any[] = [];

  constructor() { 
    this.tecnologias.push({titulo:"html",ruta:"./assets/fotos/html.png"});
    this.tecnologias.push({titulo:"css",ruta:"./assets/fotos/css.jpg"});
    this.tecnologias.push({titulo:"javascript",ruta:"./assets/fotos/javascript.png"});
    this.tecnologias.push({titulo:"php",ruta:"./assets/fotos/php.jpg"});
    this.tecnologias.push({titulo:"boostrap",ruta:"./assets/fotos/boostrap.jpg"});
    this.tecnologias.push({titulo:"angular",ruta:"./assets/fotos/angular.png"});
    
  }

  ngOnInit(): void {
    
  }

}
