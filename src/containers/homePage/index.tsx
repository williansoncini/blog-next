import { Header } from '../../components/Header/index';
import { PostData } from '../../domain/posts/posts';
import { Container } from './styles';

export type HomeProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomeProps) {
  return (
    <>
      <Header />
      <Container>
        {posts.map((post) => (
          <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
        ))}
      </Container>
    </>
  );
}
