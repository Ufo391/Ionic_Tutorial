import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public login(email: string, firebirdID: string) {
    return new Promise(function (resolve, reject) {
      const params = new HttpParams().set('email', email).set('firebirdID', firebirdID);
      const uri = this.getRootUri() + 'login';
      this.http.get(uri, { params }).toPromise().then(result => resolve(result)).catch(error => reject(error));
    });
  }

  private getRootUri(): string {
    return 'https://virtserver.swaggerhub.com/AHeinisch/trainingsplaner/1.0.1/api/';
  }

}
