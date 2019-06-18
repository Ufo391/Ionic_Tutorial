import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../libs/state/models/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Trainer } from '../libs/state/models/trainer.model';

@Injectable({
    providedIn: 'root'
  })
  export class TrainerService {
    constructor(private http: HttpClient) {}

    getOneCoach(id: number, auth: string) {
        return this.http.get<Trainer>('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/trainer/' + id + '?authtoken=' + auth);
    }

    getAllCoaches(auth: string) {
      return this.http.get<Trainer[]>('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/trainer?authtoken=' + auth);
    }

    updateCoach(id: number, auth: string, coach: Trainer){
      return this.http.put<Trainer>('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/trainer/' + id + '?authtoken=' + auth, coach);
    }
  }
