import HomePage from '../../containers/homePage/index';
import { getAllPosts } from '../../data/posts/getAllPosts';
import { PostData } from '../../domain/posts/posts';
import { GetServerSideProps } from 'next';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage category={category} posts={posts} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlQuery = `filters[category][name][$eq]=${ctx.query.category}`;
  const posts = await getAllPosts(urlQuery);

  return {
    props: {
      posts,
      category: ctx.query.category,
    },
  };
};
