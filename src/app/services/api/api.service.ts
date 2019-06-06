import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoginResponse } from 'src/app/model/response.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public login(email: string, firebirdID: string) {
    const params = new HttpParams().set('email', email).set('firebirdID', firebirdID);
    const uri = this.getRootUri() + 'login';
    return this.http.post<LoginResponse>(uri, { params });
  }

  private getRootUri(): string {
    return 'https://virtserver.swaggerhub.com/AHeinisch/trainingsplaner/1.0.1/api/';
  }

}
