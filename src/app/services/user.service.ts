import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../libs/state/models/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {}

    Login(nameP: string, emailP: string, firebaseIDP: string) {
        const body: Body = {
            name : nameP,
            email : emailP,
            firebaseID : firebaseIDP
        };
        const user = this.http.post<User>('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Login', body);
        sessionStorage.setItem('userkey', 'mYkXU0SUhfi4rXc0sN6O5sCNpQt3D8yzlqDY0Gn0ix8=');
        return user;
    }

    Logout() {
        var params: HttpParams;
        params.set('authtoken', sessionStorage.getItem('userkey'));
        return this.http.post('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Logout', params);
    }
}

class Body {
    name: string;
    email: string;
    firebaseID: string;
}

