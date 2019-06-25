import { User } from 'src/app/model/user.model';
import { AuthService } from '../auth/athentification.service';
import { UserService } from '../user/user.service';
import { Team } from 'src/app/model/team.model';

export abstract class AbstractServerAPI {

    constructor(private authService: AuthService, private userService: UserService) { }

    /*
    async login(name: string, email: string, firebirdID: string): Promise<void> {
        const result: User = await this.getUser(email, firebirdID);
        if (result === null) {
            throw new Error('Der Benutzer mit der E-Mail-Adresse \"' + email + '\" existiert nicht!');
        } else {
            this.authService.setAuthToken(this.getToken(result), result);
            this.userService.user = result;
        }
    }*/

    abstract getUser(email: string, firebirdID: string): Promise<User>;
    abstract getToken(user: User): string;

    abstract login(name: string, email: string, firebase: string): void;
    abstract logout(token: string): void;
    abstract loginGoogle(): void;

    abstract GetAllTeams(token: string): void;
    abstract GetTeam(token: string, id: number): void;
    abstract CreateTeam(token: string, team: Team): void;

    abstract CreatePlayer(token: string): void;
    abstract GetPlayer(): void;
    abstract UpdatePlayer(token: string): void;

    // CreatePlayer | CreatePlayerDone | UpdatePlayer | UpdatePlayerDone | DeletePlayer
    // | DeletePlayerDone | GetPlayer | GetPlayerDone;
}
