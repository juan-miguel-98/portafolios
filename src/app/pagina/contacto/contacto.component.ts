import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  correo = "juanmiguelgc1998@gmail.com";
  copiado = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  copiar(){
    this.copiado = true;
    this.copiarContenido();
  }

  async copiarContenido() {
    try {
      await navigator.clipboard.writeText(this.correo);
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }

}
