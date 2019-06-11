import { User } from 'src/app/model/user.model';
import { AuthService } from '../auth/athentification.service';

export abstract class AbstractServerAPI {

    constructor(private authService: AuthService) { }

    async login(email: string, firebirdID: string): Promise<void> {
        const result: User = await this.getUser(email, firebirdID);
        if (result === null) {
            throw new Error('Der Benutzer mit der E-Mail-Adresse \"' + email + '\" existiert nicht!');
        } else {
            this.authService.setAuthToken(this.getToken(result), result);
            this.authService.setUser(result);
        }
    }

    abstract getUser(email: string, firebirdID: string): Promise<User>;
    abstract getToken(user: User): string;
}
