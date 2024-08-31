import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pagina/error/error.component';
import { InfoComponent } from './pagina/info/info.component';
import { TecnologiaComponent } from './pagina/tecnologia/tecnologia.component';
import { ContactoComponent } from './pagina/contacto/contacto.component';
import { ProyectosComponent } from './pagina/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    InfoComponent,
    TecnologiaComponent,
    ContactoComponent,
    ProyectosComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
