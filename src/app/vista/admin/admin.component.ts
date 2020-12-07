import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 // constructor() { }
constructor(public router: Router,public authSvc:AuthService){}

  ngOnInit(): void {
  }

  redirectToHome() {
    this.router.navigateByUrl('dashboard/home');
  }
  redirectToAbout() {
    this.router.navigateByUrl('dashboard/about');
  }
  logMeOut() {
    this.authSvc.logout();
    this.router.navigateByUrl('inicio');
  }

  redirectToproductos(){
    this.router.navigateByUrl('dashboard/productos');
  }
}
