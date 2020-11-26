import { Post } from '@app/models';
import axios from 'axios';

export class PostService {
  async getAllPost() {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  }
}

export const postService = new PostService();
