import { Footer } from '../../components/Footer/index';
import { Header } from '../../components/Header/index';
import { MainContainer } from '../../components/MainContainer/index';
import { PostCard } from '../../components/PostCard/index';
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
            <PostCard
              title={post.attributes.title}
              key={post.attributes.slug}
              slug={post.attributes.slug}
              cover={post.attributes.cover.data.attributes.formats.small.url}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
