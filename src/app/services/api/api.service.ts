import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoginResponse } from 'src/app/responses/response.interfaces';
import { AbstractServerAPI } from './api.abstract';
import { APIMock } from '../mocking/api.mock';
import { MockingService } from '../mocking/mocking.service';
import { AuthService } from '../auth/athentification.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private serverAPI: AbstractServerAPI;

  constructor(private http: HttpClient, private mockingService: MockingService, private authService: AuthService) {
    this.serverAPI = new APIMock(this.mockingService, this.authService);
  }

  public getAPI(): AbstractServerAPI {
    return this.serverAPI;
  }

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
