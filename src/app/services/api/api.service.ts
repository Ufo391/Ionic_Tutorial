import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractServerAPI } from './api.abstract';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends AbstractServerAPI {

  constructor() { }

  // erstmal von aussen nicht zugreifbar lassen 
  /*
  private login(email: string, firebirdID: string): Promise<User> {

    return new Promise((resolve, reject) => {
      const result: User = this.apiInterface.login(email, firebirdID);

      if (result === null) {
        reject(new Error('User mit der E-Mail-Adresse \"' + email + '\" existiert nicht!'));
      } else {
        resolve(result);
      }
    });

    
    const params = new HttpParams().set('email', email).set('firebirdID', firebirdID);
    const uri = this.getRootUri() + 'login';
    return this.http.post<LoginResponse>(uri, { params });      
  }
  
  */

  private getRootUri(): string {
    return 'https://virtserver.swaggerhub.com/AHeinisch/trainingsplaner/1.0.1/api/';
  }

}
