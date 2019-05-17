import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [AngularFireAuth]
})
export class LoginPage implements OnInit {

  User: User;
  email = '';
  password = '';

  constructor(public afAuth: AngularFireAuth) {
  }

  loginEmail() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
