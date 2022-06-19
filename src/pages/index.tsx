import { GetStaticProps } from 'next';
import HomePage from '../containers/homePage/index';
import { getAllPosts } from '../data/posts/getAllPosts';
import { PostData } from '../domain/posts/posts';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export async function getStaticProps(): GetStaticProps {
  const posts = await getAllPosts();

  return { props: { posts } };
}
