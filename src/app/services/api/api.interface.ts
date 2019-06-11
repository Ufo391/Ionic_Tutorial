import { User } from 'src/app/model/user.model';

export interface IAPICall {
    login(email: string, firebirdID: string): User;
}
