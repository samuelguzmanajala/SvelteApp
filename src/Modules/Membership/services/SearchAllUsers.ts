import type {UserRepository} from "../Domain/UserRepository";
import type {User} from "../Domain/User";

export class SearchAllUsers {
    constructor(private userRepository: UserRepository) {}
    async run(): Promise<Array<User>> {
        return await this.userRepository.searchAll();
    }
}