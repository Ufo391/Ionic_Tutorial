import { Lizenz } from '../services/enums/enums.service';
import { Team } from './team.model';
import { Training } from './training.model';

export class User {
    private id: number;
    private mail: string;
    private name: string;
    private birth: Date;
    private lizenz: Lizenz;
    private teams: Team[];
    private exercises: Training[];

    constructor(id: number, mail: string, name: string, birth: Date, lizenz: Lizenz, teams: Team[], exercises: Training[]) {
        this.id = id;
        this.mail = mail;
        this.name = name;
        this.birth = birth;
        this.lizenz = lizenz;
        this.teams = teams;
        this.exercises = exercises;
    }

    public getMail(): string{
        return this.mail;
    }
}
