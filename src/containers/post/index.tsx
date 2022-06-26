import Head from 'next/head';
import { Comments } from '../../comments/index';
import { Footer } from '../../components/Footer/index';
import { Header } from '../../components/Header/index';
import { Heading } from '../../components/Heading/index';
import { MainContainer } from '../../components/MainContainer/index';
import { PostContent } from '../../components/PostContent/index';
import { PostCover } from '../../components/PostCover/index';
import { PostDetail } from '../../components/PostDetail/index';
import { SITE_NAME } from '../../config/appConfig';
import { PostData } from '../../domain/posts/posts';
import { removeHtml } from '../../utils/removeHtml';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Head>
        <title>
          {post.attributes.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHtml(post.attributes.content).slice(0, 150)}
        />
      </Head>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          coverUrl={post.attributes.cover.data.attributes.formats.small.url}
          alt={post.attributes.title}
        />
        <PostDetail
          author={post.attributes.author.data.attributes.name}
          category={post.attributes.category.data.attributes.name}
          date={post.attributes.createdAt}
        />
        <PostContent content={post.attributes.content} />
        <Comments slug={post.attributes.slug} title={post.attributes.title} />
      </MainContainer>
      <Footer />
    </>
  );
};
