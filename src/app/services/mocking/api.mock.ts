import { IAPICall } from '../api/api.interface';
import { User } from "../../model/user.model";
import { MockingService } from './mocking.service';

export class APIMock implements IAPICall {

    constructor(private mockingService: MockingService) { }

    login(email: string, firebirdID: string): User {
        return this.findUser(email);
    }

    private findUser(email: string): User {
        this.mockingService.trainers.forEach((value: User) => {
            if (value.getMail() === email) {
                return value;
            }
        });

        return null;
    }

}