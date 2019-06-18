import { Spieler } from './spieler.model';
export interface Team {
    id?: number;
    name: string;
    altersklasse: number;
    liga: number;
    spieler?: Spieler[];
}
