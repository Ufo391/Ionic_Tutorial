import { Player } from './player.model';

export interface Team {
    id: number;
    name: string;
    alterklasse: number;
    liga: number;
    players: Player[];
}
