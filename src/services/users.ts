import axios from 'axios';
import { User } from '@app/models';

export class UserService {
  async getAllUsers() {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  }
}

export const userService = new UserService();
