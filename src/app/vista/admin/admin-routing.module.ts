import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ProductoFormComponent } from '../producto-form/producto-form.component';

const routes: Routes = [
  { path: 'Admin', component: AdminComponent },
  { path: 'Admin/add', component: ProductoFormComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
