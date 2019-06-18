import { Team } from './team.model';

export interface Trainer {
    id: number;
    firebaseID: string;
    name: string;
    email: string;
    geburtstag: Date;
    lizenz: number;
    teams?: Team[];
}
