import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase";
import { AlertService } from "../alert/alert.service";
import { User } from "src/app/model/user.model";
import { UserService } from "../user/user.service";
import { ApiService } from "../api/api.service";
import { Login } from "src/app/responses/response.interfaces";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private user: User;

  constructor(
    private afAuth: AngularFireAuth,
    private alertService: AlertService,
    private userService: UserService,
    private apiService: ApiService
  ) {}

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

  logout() {
    const that = this;
    this.afAuth.auth
      .signOut()
      .then(() => {
        this.user = undefined;
      })
      .catch(error => {
        that.alertService.errorAuthProcess(error.message);
      });
  }

  getLoggedInUser() {
    return this.afAuth.authState;
  }

  loginEmail(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then(async (result: auth.UserCredential) => {
          resolve(await this.getAndSetUserFromAPICred(result));
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  public getUser(): User {
    return this.user;
  }

  private getAndSetUserFromAPICred(
    credential: auth.UserCredential
  ): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const login: Login = await this.apiService.login(
          credential.user.displayName,
          credential.user.email,
          credential.user.uid
        );
        this.user = { token: login.token, trainer: login.trainer };
        resolve(this.user);
      } catch (error) {
        reject(error);
      }
    });
  }

  private getAndSetUserFromAPIUser(fUser: firebase.User): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const login: Login = await this.apiService.login(
          fUser.displayName,
          fUser.email,
          fUser.uid
        );
        this.user = { token: login.token, trainer: login.trainer };
        resolve(this.user);
      } catch (error) {
        reject(error);
      }
    });
  }

  ReconnectSession(fUser: firebase.User) {
    this.getAndSetUserFromAPIUser(fUser);
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
