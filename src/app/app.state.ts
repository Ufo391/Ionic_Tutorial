import {User} from './libs/state/models/user.model';
import { Trainer } from './libs/state/models/trainer.model';
import { Team } from './libs/state/models/team.model';
import {Uebung} from './libs/state/models/uebung.model';

export interface AppState {
    readonly user: User;
    readonly allTrainer: Trainer[];
    readonly selectedTrainer: Trainer;
    readonly selectedTeam: Team;
    readonly allTeams: Team[];
    readonly allUebungen: Uebung[];
    readonly selectedUebung: Uebung;
}
