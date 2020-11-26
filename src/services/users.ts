import { User } from '@app/models';
import Axios from 'axios';

export const getAllUsers = async () => {
  const response = await Axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
  return response.data;
};
