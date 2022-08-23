import type {UserRepository} from "../Domain/UserRepository";
import type {User} from "../Domain/User";

export class CreateUser {
    constructor(private userRepository: UserRepository) {}
    async run(user: User): Promise<void> {
        await this.userRepository.save(user);
    }
}