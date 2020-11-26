import { User } from '@app/models';
import axios from 'axios';

export class UserService {
  async getAllUsers() {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  }
}

export const userService = new UserService();
