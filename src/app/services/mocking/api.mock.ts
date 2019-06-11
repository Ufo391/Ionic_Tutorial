import { AbstractServerAPI } from '../api/api.abstract';
import { User } from "../../model/user.model";
import { MockingService } from './mocking.service';
import { reject } from 'q';
import { AuthService } from '../auth/athentification.service';

export class APIMock extends AbstractServerAPI {

    constructor(private mockingService: MockingService, authService: AuthService) {
        super(authService);
    }

    getUser(email: string, firebirdID: string): Promise<User> {
        return this.findUser(email);
    }

    getToken(user: User): string {
        return 'geheimesTokenVon:' + user.name;
    }

    private async findUser(email: string): Promise<User> {

        let result: User = null;
        const promises = this.mockingService.trainers.map((trainer: User) => {
            if (trainer.mail === email) {
                result = trainer;
            }
        });

        await Promise.all(promises);
        return result;
    }
}
