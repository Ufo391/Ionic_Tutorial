import { Trainer } from '../model/trainer.model';
import { Player } from '../model/player.model';
import { Address } from '../model/address.model';
import { PlayerPropertie } from '../model/playerPropertie.model';
import { Team } from '../model/team.model';

export interface LoginResponse {
    error: string;
    token: string;
    trainer: Trainer;
}

export interface LogoutResponse {
    error: string;
}

export interface GetAllTeamsResponse {
    error: string;
    id: number;
    name: string;
    altersklasse: number;
    liga: number;
}

export interface GetTeamANDCreateTeamResponse {
    error: string;
    id: number;
    name: string;
    altersklasse: number;
    liga: number;
    trainer: Trainer[];
    spieler: Player;
}

export interface CreatePlayerResponse {
    error: string;
    id: number;
    geburtstag: string;
    name: string;
    notiz: string;
    istFrau: boolean;
    kontakt: Address;
    merkmale: PlayerPropertie[];
    teams: Team[];
}

export interface GetPlayerResponse {
    error: string;
    id: number;
    name: string;
    altersklasse: number;
    liga: number;
    trainer: Trainer[];
    spieler: Player[];
}

export interface UpdatePlayerResponse {
    error: string;
    id: number;
    geburtstag: string;
    name: string;
    notiz: string;
    istFrau: boolean;
    kontakt: Address;
    merkmale: PlayerPropertie[];
}
