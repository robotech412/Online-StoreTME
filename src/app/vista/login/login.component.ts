import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/shared/models/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { getMaxListeners } from 'process';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService, private route: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit() { }

  onLogin(form: UserI) {
    this.authSvc
      .loginByEmail(form)
      .then(res => {
        console.log('Successfully', res);
        this.route.navigate(['Admin']);
      })
      .catch(err => console.log('Error', err));
  }
}