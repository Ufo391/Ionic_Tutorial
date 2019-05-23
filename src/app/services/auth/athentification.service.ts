import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private user: firebase.User;

  constructor(private afAuth: AngularFireAuth) {}

  loginGoogle() {
    console.log("Redirecting to Google login provider");
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  getUser() {
    return this.user;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getLoggedInUser() {
    return this.afAuth.authState;
  }

  loginEmail(email: string, password: string, callback) {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        callback();
        Callback funktion für navigate to gedöns
      })
      .catch(function(error) {
        debugger;

        hier weiter machen es wird hier ein fehler geworfen wenn man falsche Eingaben macht

        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  resetPassword(email: string) {
    this.afAuth.auth.sendPasswordResetEmail(email);
  }

  register(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}
