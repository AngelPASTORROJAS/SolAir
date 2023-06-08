import { httpClient } from '../httpClient';
import { User } from '../models/User';

const ressource = 'api/users'

class UserRessource {
    public async getUsersAsync(): Promise<User[]> {
        const response = await httpClient.get(`${ressource}`)
        return response.data as User[]
    }
}

export {UserRessource}