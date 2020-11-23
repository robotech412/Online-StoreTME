
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from "./vista/detalles/detalles.component";
import { InicioComponent } from './vista/inicio/inicio.component';
import { ProductosComponent } from './vista/productos/productos.component';
import { ContactoComponent } from './vista/contacto/contacto.component';

const app_routes: Routes = [
    { path: 'productos/detalles/:id', component: DetallesComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'Inicio', component: InicioComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'Inicio' },
];

export const app_routing = RouterModule.forRoot(app_routes, { relativeLinkResolution: 'legacy' });