import { Merkmale } from '../services/enums/enums.service';
import { User } from './user.model';

export interface PlayerPropertie {
    creatorDate: Date;
    value: number;
    typ: Merkmale;
    creator: User;
}
