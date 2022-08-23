import type {UserRepository} from "../Domain/UserRepository";

export class DeleteUser {
  constructor(private userRepository: UserRepository) {}
  async run(id: string): Promise<void> {
    await this.userRepository.deleteUserById(id);
  }
}