import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { UserI } from '../models/user.interface';
import firebase from 'firebase/app'; //esta importacion soluciona el Observable<firebase.User>

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.userData = afAuth.authState;
  }

  loginByEmail(user: UserI) {
    const { email, password } = user;
   return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  logoutUser():Promise<void> {
    return firebase.auth().signOut();
  }

  //logout() {
    //this.afAuth.signInWithEmailAndPassword.signOut();
  //}
}
