import { Footer } from '../../components/Footer/index';
import { Header } from '../../components/Header/index';
import { Heading } from '../../components/Heading/index';
import { MainContainer } from '../../components/MainContainer/index';
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
        <div dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
      </MainContainer>
      <Footer />
    </>
  );
};
