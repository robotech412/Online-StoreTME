import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;


  constructor(public usuariosService: UsuariosService, public router: Router) { }

  login() {
    const user = { email: this.email, password: this.password };
    this.usuariosService.login(user).subscribe(data => {
      this.usuariosService.setToken(data.token);
      this.router.navigateByUrl('/Dashboard');

    },
      error => {
      console.log(error);
    });
  }

}
