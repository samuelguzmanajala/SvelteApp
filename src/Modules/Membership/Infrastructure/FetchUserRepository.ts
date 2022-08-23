import type {UserRepository} from "../Domain/UserRepository";
import type {User} from "../Domain/User";

export class FetchUserRepository implements UserRepository {
  private readonly url: URL = new URL('https://testdeno.up.railway.app/users');

  constructor() {
  }

  async save(user: User): Promise<void> {
    let url: URL = new URL(`${this.url.href}/`);
    url.searchParams.append('id', user.id);
    const response = await fetch(url, {
      method: 'PUT',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    });
  }

  search(id: string): Promise<User> {
    return Promise.resolve(undefined);
  }

  async searchAll(): Promise<Array<User>> {
    const response = await fetch(this.url);
    return await response.json();
  }

  async deleteUserById(id: string): Promise<void> {
    let url: URL = new URL(`${this.url.href}/`);
    url.searchParams.append('id', id);
    const response = await fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'}
    });
  }

}