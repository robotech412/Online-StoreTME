import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { LoginModule } from '../login/login.module';

import { AdminComponent } from './admin.component';
import { ProductoFormComponent } from '../producto-form/producto-form.component';

//const routes: Routes = [{ path: 'Admin', component: AdminComponent }];

const appRoutes: Routes = [
  {
    path: 'dashboard', component: AdminComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ]
  },{ path: 'dashboard/add', component: ProductoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

//{ path: 'dashboard/add', component: ProductoFormComponent}];