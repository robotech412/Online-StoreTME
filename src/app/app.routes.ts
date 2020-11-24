

import { ContactoComponent } from './vista/contacto/contacto.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './vista/inicio/inicio.component'
import { ProductosComponent } from './vista/productos/productos.component';
import { ProductoFormComponent } from './vista/producto-form/producto-form.component';
import { DetallesComponent } from './vista/detalles/detalles.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'productos/add',
    component: ProductoFormComponent
  },
  {
    path: 'productos/edit/:id',
    component: ProductoFormComponent
  },
  {
    path: 'productos/detalles/:id',
    component: DetallesComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const app_routing = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });