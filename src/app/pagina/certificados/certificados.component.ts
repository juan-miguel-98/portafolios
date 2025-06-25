import { Component, OnInit } from '@angular/core';
import { CertificadosService } from 'src/app/servicios/certificados.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  certificados: any[] = [];

  constructor(private certificadosService: CertificadosService) {
    this.certificados = certificadosService.certificados();
   }

  ngOnInit(): void {}

}
