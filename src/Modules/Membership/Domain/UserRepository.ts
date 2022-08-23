import type {User} from "./User";

export interface UserRepository {
    searchAll(): Promise<Array<User>>;
    search(id: string): Promise<User>;
    save(user: User): Promise<void>;
    deleteUserById(id: string): Promise<void>;
}