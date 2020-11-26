import { Post } from '@app/models';
import Axios from 'axios';

export const getAllPost = async () => {
  const response = await Axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};
