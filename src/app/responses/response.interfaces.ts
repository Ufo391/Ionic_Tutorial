import { Trainer } from '../model/trainer.model';
import { Player } from '../model/player.model';
import { Address } from '../model/address.model';
import { PlayerPropertie } from '../model/playerPropertie.model';
import { Team } from '../model/team.model';

export interface Login {
    error: string;
    token: string;
    trainerID: number;
}

export interface Logout {
    error: string;
}

export interface GetAllTeams {
    error: string;
    id: number;
    name: string;
    altersklasse: number;
    liga: number;
}

export interface GetTeamANDCreateTeam {
    error: string;
    id: number;
    name: string;
    altersklasse: number;
    liga: number;
    trainer: Trainer[];
    spieler: Player;
}

export interface CreatePlayer {
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

export interface GetPlayer {
    error: string;
    id: number;
    name: string;
    altersklasse: number;
    liga: number;
    trainer: Trainer[];
    spieler: Player[];
}

export interface UpdatePlayer {
    error: string;
    id: number;
    geburtstag: string;
    name: string;
    notiz: string;
    istFrau: boolean;
    kontakt: Address;
    merkmale: PlayerPropertie[];
}
