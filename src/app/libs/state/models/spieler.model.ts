import { Kontakt } from './kontakt.model';
import {Merkmal} from './../models/merkmal.model';

export interface Spieler {
    id: number;
    geburtstag: string;
    name: string;
    notiz: string;
    istFrau: boolean;
    kontakt: Kontakt;
    merkmale: Merkmal[];
}
