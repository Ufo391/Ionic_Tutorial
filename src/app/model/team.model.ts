import { Player } from './player.model';

export interface Team {
    id?: number;
    name: string;
    altersklasse: number;
    liga: number;
    spieler?: Player[];
}
