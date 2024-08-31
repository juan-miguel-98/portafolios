import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  ProyectosTer: any[] = [];
  ProyectosFut: any[] = [];

  constructor() {
    const pr = 6 - this.ProyectosTer.length;

    this.ProyectosFut = Array(pr).fill(0).map((x,i)=>{
      return i+1
  });
   }

  ngOnInit(): void {
  }

}
