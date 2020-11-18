
import { RouterModule, Routes } from '@angular/router';

import { DetallesComponent } from "./vista/detalles/detalles.component";

import { ZapatosComponent } from "./vista/zapatos/zapatos.component";

import { RopaComponent } from "./vista/ropa/ropa.component";

import { InicioComponent } from './vista/inicio/inicio.component';

import { ProductosComponent } from './vista/productos/productos.component';

import { ContactoComponent } from './vista/contacto/contacto.component';

import { LoginComponent } from './vista/login/login.component';

import { DashboardComponent } from './vista/dashboard/dashboard.component';

const app_routes: Routes = [
    { path: 'Detalles', component: DetallesComponent },
    { path: 'Zapatos', component: ZapatosComponent },
    { path: 'Ropa', component: RopaComponent },
    { path: 'Productos', component: ProductosComponent },
    { path: 'Inicio', component: InicioComponent },
    { path: 'Contacto', component: ContactoComponent },
    { path: 'Login', component: LoginComponent },
    {path: 'Dashboard',component:DashboardComponent},
    
    { path: '**', pathMatch: 'full', redirectTo:'Inicio' },
];

export const app_routing = RouterModule.forRoot(app_routes, { relativeLinkResolution: 'legacy' });