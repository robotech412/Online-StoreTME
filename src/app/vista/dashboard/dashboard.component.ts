import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public usuariosService: UsuariosService) { }

  ngOnInit() {
    this.getUserLogged();
  }
  getUserLogged() {
    this.usuariosService.getUser().subscribe(user => {
      console.log(user);
    });
  }
}
