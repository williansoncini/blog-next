import { Footer } from '../../components/Footer/index';
import { Header } from '../../components/Header/index';
import { Heading } from '../../components/Heading/index';
import { MainContainer } from '../../components/MainContainer/index';
import { PostCover } from '../../components/PostCover/index';
import { PostDetail } from '../../components/PostDetail/index';
import { PostData } from '../../domain/posts/posts';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          coverUrl={post.attributes.cover.data.attributes.formats.small.url}
          alt={post.attributes.title}
        />
        <PostDetail
          author={''}
          category={''}
          date={post.attributes.createdAt}
        />
        <div dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
      </MainContainer>
      <Footer />
    </>
  );
};
