import { API_GET_POSTS } from '../../config/appConfig';
import { PostData } from '../../domain/posts/posts';
import { fetchJson } from '../../utils/fetchJson';

export const getPosts = async () => {
  const posts = fetchJson<PostData[]>(API_GET_POSTS);
  return posts;
};
