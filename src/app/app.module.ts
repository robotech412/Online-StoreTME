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
import { ContactoComponent } from './vista/contacto/contacto.component';
import { LoginComponent } from './vista/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './vista/dashboard/dashboard.component';



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
    ContactoComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    app_routing,
  ],
  providers: [CookieService], //modulo de angular para usar cookies
  bootstrap: [AppComponent]
})
export class AppModule { }
