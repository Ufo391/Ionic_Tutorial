import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoginResponse } from 'src/app/responses/response.interfaces';
import { IAPICall } from './api.interface';
import { User } from 'src/app/model/user.model';
import { Lizenz } from '../enums/enums.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private API_Interface: IAPICall;

  hier weiter --> implementiere eine nicht mockup basierte implementierung vom Interface um diese später schnell auszustauschen

  public login(email: string, firebirdID: string){
    const params = new HttpParams().set('email', email).set('firebirdID', firebirdID);
    const uri = this.getRootUri() + 'login';
    return this.http.post<LoginResponse>(uri, { params });
  }

  private getRootUri(): string {
    return 'https://virtserver.swaggerhub.com/AHeinisch/trainingsplaner/1.0.1/api/';
  }

}
