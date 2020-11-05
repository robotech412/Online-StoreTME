import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { app_routing } from "./app.routes";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetallesComponent } from './vista/detalles/detalles.component';
import { ZapatosComponent } from './vista/zapatos/zapatos.component';
import { RopaComponent } from './vista/ropa/ropa.component';
import { InicioComponent } from './vista/inicio/inicio.component';
import { NavbarComponent } from './vista/navbar/navbar.component';
import { FooterComponent } from './vista/footer/footer.component';
import { ProductosComponent } from './vista/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    DetallesComponent,
    ZapatosComponent,
    RopaComponent,
    ProductosComponent,
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
