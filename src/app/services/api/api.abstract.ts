import { User } from 'src/app/model/user.model';
import { AuthService } from '../auth/athentification.service';
import { UserService } from '../user/user.service';
import { Team } from 'src/app/model/team.model';
import { Login, Logout, GetAllTeams, GetTeamANDCreateTeam, CreatePlayer, GetPlayer, UpdatePlayer } from 'src/app/responses/response.interfaces';
import { Player } from 'src/app/model/player.model';

export abstract class AbstractServerAPI {

    constructor(public authService: AuthService, public userService: UserService) { }

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

    abstract login(name: string, email: string, firebaseID: string): Promise<Login>;
    abstract logout(token: string): Promise<Logout>;
    abstract loginGoogle(): void;

    abstract GetAllTeams(token: string): Promise<GetAllTeams>;
    abstract GetTeam(token: string, id: number): Promise<GetTeamANDCreateTeam>;
    abstract CreateTeam(token: string, team: Team): Promise<GetTeamANDCreateTeam>;

    abstract CreatePlayer(token: string, player: Player): Promise<CreatePlayer>;
    abstract GetPlayer(token: string, id: number): Promise<GetPlayer>;
    abstract UpdatePlayer(token: string, id: number): Promise<UpdatePlayer>;

}
