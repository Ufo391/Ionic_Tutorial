import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Uebung } from '../libs/state/models/uebung.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UebungService {
    constructor(private http: HttpClient) {}

    GetUebung(id: number, auth: string) {
        return this.http.get<Uebung>('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Uebung' + id + '?authtoken=' + auth);
    }

    GetAllUebungen(auth: string) {
        return this.http.get<Uebung[]>('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Uebung?authtoken=' + auth);
    }

    CreateUebung(auth: string, uebung:Uebung) {
        return this.http.post('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Uebung?authtoken=' + auth, uebung);
    }

    UpdateUebung(id: number, auth: string, uebung: Uebung) {
        return this.http.put<Uebung>('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Uebung/' + id + '?authtoken=' + auth, uebung);
    }

    DeleteUebung(id: number, auth: string){
        return this.http.delete('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Uebung/' + id + '?authtoken=' + auth);
    }
}