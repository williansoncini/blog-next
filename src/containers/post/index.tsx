import { Footer } from '../../components/Footer/index';
import { Header } from '../../components/Header/index';
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
        <h2>{post.attributes.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
      </MainContainer>
      <Footer />
    </>
  );
};
