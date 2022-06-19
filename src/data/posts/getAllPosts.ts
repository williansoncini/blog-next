import { API_GET_POSTS } from '../../config/appConfig';
import { PostData } from '../../domain/posts/posts';
import { fetchJson } from '../../utils/fetchJson';

export const getAllPosts = async (query = '') => {
  const url = `${API_GET_POSTS}&${query}`;
  console.log(url);
  const posts = fetchJson<PostData[]>(url);
  return posts;
};
