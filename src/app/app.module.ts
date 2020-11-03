import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { app_routing } from "./app.routes";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetallesComponent } from './vista/detalles/detalles.component';
import { ProductosComponent } from './vista/productos/productos.component';
import { RopaComponent } from './vista/ropa/ropa.component';
import { NavegacionComponent } from './vista/navegacion/navegacion.component';
import { InicioComponent } from './vista/inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DetallesComponent,
    ProductosComponent,
    RopaComponent,
    NavegacionComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
