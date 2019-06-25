import { Address } from './address.model';
import { PlayerPropertie } from './playerPropertie.model';
import { Team } from './team.model';

export interface Player {
    id?: number;
    birth: string;
    name: string;
    notiz: string;
    istFrau: boolean;
    kontakt: Address;
    nummer?: number;
    teams?: Team[];
    merkmale?: PlayerPropertie[];
}
