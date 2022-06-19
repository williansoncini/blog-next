import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '../../containers/post/index';
import { getAllPosts } from '../../data/posts/getAllPosts';
import { getPost } from '../../data/posts/getPost';
import { PostData } from '../../domain/posts/posts';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params.slug);

  return {
    props: { post: posts[0] },
  };
};
