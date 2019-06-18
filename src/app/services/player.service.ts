import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Spieler } from '../libs/state/models/spieler.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import {selectUserToken} from './../libs/state/selectors/user.selector';
import {Merkmal} from './../libs/state/models/merkmal.model';

@Injectable({
    providedIn: 'root'
  })
  export class SpielerService {
    constructor(private http: HttpClient) {}

    GetPlayer() {
        return this.http.get('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Spieler/2?authtoken=bVlrWFUwU1VoZmk0clhjMHNONk81c0NOcFF0M0Q4eXpscURZMEduMGl4OD0w')
    }

    CreatePlayer() {
        var tester: Merkmal = {id:0, wert: 6, typ: 4}
        var test:Spieler = {
            id: 0,
            geburtstag: '2019-09-09',
            name: 'Karl Gustav Tor',
            notiz: 'Aufbrausend, knorke Technik',
            istFrau: false,
            kontakt: {
                ort: 'Schalwindel',
                postleitzahl: '86723',
                strassenname: 'Erfinde-Mich-Avenue',
                strassennummer: '3',
                telefonnummer: '8263735'
            },
            merkmale: [tester]
        }

        return this.http.post('http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Spieler?authtoken=bVlrWFUwU1VoZmk0clhjMHNONk81c0NOcFF0M0Q4eXpscURZMEduMGl4OD0w', test)
    }
  }