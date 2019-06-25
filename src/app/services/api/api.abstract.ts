import { User } from 'src/app/model/user.model';
import { AuthService } from '../auth/athentification.service';
import { UserService } from '../user/user.service';

export abstract class AbstractServerAPI {

    constructor(private authService: AuthService, private userService: UserService) { }

    async login(email: string, firebirdID: string): Promise<void> {
        const result: User = await this.getUser(email, firebirdID);
        if (result === null) {
            throw new Error('Der Benutzer mit der E-Mail-Adresse \"' + email + '\" existiert nicht!');
        } else {
            this.authService.setAuthToken(this.getToken(result), result);
            this.userService.user = result;
        }
    }

    abstract getUser(email: string, firebirdID: string): Promise<User>;
    abstract getToken(user: User): string;

    abstract CreatePlayer(): void;
    abstract UpdatePlayer(): void;
    abstract DeletePlayer(): void;
    abstract GetPlayer(): void;

    // CreatePlayer | CreatePlayerDone | UpdatePlayer | UpdatePlayerDone | DeletePlayer
    // | DeletePlayerDone | GetPlayer | GetPlayerDone;
}
