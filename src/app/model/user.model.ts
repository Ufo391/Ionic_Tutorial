import { Lizenz } from '../services/enums/enums.service';
import { Team } from './team.model';
import { Training } from './training.model';

export interface User {
    id: number;
    mail: string;
    name: string;
    birth: Date;
    lizenz: Lizenz;
    teams: Team[];
    exercises: Training[];
}
