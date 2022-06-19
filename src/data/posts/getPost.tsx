import { API_GET_POSTS } from '../../config/appConfig';
import { PostData } from '../../domain/posts/posts';
import { fetchJson } from '../../utils/fetchJson';

export const getPost = async (slug: string | string[]) => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${API_GET_POSTS}&filters[slug][$eq]=${slugString}`;
  const jsonPosts = await fetchJson<PostData[]>(url);
  return jsonPosts;
};
