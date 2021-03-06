import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase";
import { AlertService } from "../alert/alert.service";
import { User } from 'src/app/model/user.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private firebaseUser: firebase.User;
  private authToken: string;

  constructor(
    private afAuth: AngularFireAuth,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  loginGoogle(navigateCallback) {
    let that = this;
    this.afAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(() => {
        navigateCallback();
      })
      .catch(error => {
        that.alertService.errorAuthProcess(error.message);
      });
  }

  getFirebaseUser(): firebase.User {
    return this.firebaseUser;
  }

  getAuthToken(): string {
    return this.authToken;
  }

  setAuthToken(token: string, user: User): void {
    if (this.authToken !== undefined) {
      throw new Error('Ungültige Modifizierung!');
    } else {
      this.authToken = token;
      this.userService.user = user;
    }
  }

  logout() {
    // Todo --> Authtoken & User & Trainer auf null setzen!
    const that = this;
    this.afAuth.auth.signOut().catch(error => {
      that.alertService.errorAuthProcess(error.message);
    });
  }

  getLoggedInUser() {
    return this.afAuth.authState;
  }

  loginEmail(email: string, password: string, navigateCallback) {
    const that = this;

    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigateCallback();
      })
      .catch(error => {
        that.alertService.errorAuthProcess(error.message);
      });
  }

  resetPassword(email: string) {
    const that = this;

    this.afAuth.auth.sendPasswordResetEmail(email).catch(error => {
      that.alertService.errorAuthProcess(error.message);
    });
  }

  register(
    email: string,
    password: string,
    navigateCallback,
    targetPage: string
  ) {
    const that = this;

    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigateCallback(targetPage);
      })
      .catch(error => {
        that.alertService.errorAuthProcess(error.message);
      });
  }
}
