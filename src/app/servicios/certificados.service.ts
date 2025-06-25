import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificadosService {
  
  constructor() { }

  certificados(){
  const certificados: any[] = [];
  const rutaBase = './assets/PDF/certificados/';
  certificados.push(
    { foto: `${rutaBase}certificado1.jpg`, ruta: `${rutaBase}certificado1.pdf` },
    { foto: `${rutaBase}certificado2.jpg`, ruta: `${rutaBase}certificado2.pdf` },
    { foto: `${rutaBase}certificado3.jpg`, ruta: `${rutaBase}certificado3.pdf` },
    { foto: `${rutaBase}certificado4.jpg`, ruta: `${rutaBase}certificado4.pdf` },
    { foto: `${rutaBase}certificado5.jpg`, ruta: `${rutaBase}certificado5.pdf` },
    { foto: `${rutaBase}certificado6.jpg`, ruta: `${rutaBase}certificado6.pdf` },
    { foto: `${rutaBase}certificado7.jpg`, ruta: `${rutaBase}certificado7.pdf` }
  );
  
  return certificados;
}
}
