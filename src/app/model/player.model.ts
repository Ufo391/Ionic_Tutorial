import { Address } from './address.model';
import { PlayerPropertie } from './playerPropertie.model';

export interface Player {
    name: string;
    birth: string;
    memo: string;
    isWoman: boolean;
    properties: PlayerPropertie[];
    address: string;
}