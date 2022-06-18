import { Header } from '../../components/Header/index';
import { MainContainer } from '../../components/MainContainer/index';
import { PostData } from '../../domain/posts/posts';
import { Container } from './styles';

export type HomeProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomeProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
          ))}
        </Container>
      </MainContainer>
    </>
  );
}
