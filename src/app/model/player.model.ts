import { Address } from './address.model';
import { PlayerPropertie } from './playerPropertie.model';

export interface Player {
    id: number;
    name: string;
    birth: Date;
    memo: string;
    isWoman: boolean;
    properties: PlayerPropertie[];
    address: Address;
}