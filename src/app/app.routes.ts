
import { RouterModule, Routes } from '@angular/router';

import { DetallesComponent } from "./vista/detalles/detalles.component";

import { ProductosComponent } from "./vista/productos/productos.component";

import { RopaComponent } from "./vista/ropa/ropa.component";

import { InicioComponent } from './vista/inicio/inicio.component';

const app_routes: Routes = [
    { path: 'Detalles', component: DetallesComponent },
    { path: 'Productos', component: ProductosComponent },
    { path: 'Ropa', component: RopaComponent },
    { path: 'Inicio', component: InicioComponent},
    { path: '**', pathMatch: 'full', redirectTo:'Inicio' },
];

export const app_routing = RouterModule.forRoot(app_routes);