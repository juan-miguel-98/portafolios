import { Component, OnInit } from '@angular/core';
import { CuerpoService } from 'src/app/servicios/cuerpo.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  tecnologias:any[];

  constructor(private cuerpo: CuerpoService) {
    this.tecnologias = this.cuerpo.tecnologias();     

   }

  ngOnInit(): void {
  }

}
