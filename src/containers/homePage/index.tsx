import Head from 'next/head';
import { Footer } from '../../components/Footer/index';
import { Header } from '../../components/Header/index';
import { MainContainer } from '../../components/MainContainer/index';
import { PostCard } from '../../components/PostCard/index';
import { SITE_NAME } from '../../config/appConfig';
import { PostData } from '../../domain/posts/posts';
import { Category, Container } from './styles';

export type HomeProps = {
  posts: PostData[];
  category?: string;
};

export default function HomePage({ posts, category }: HomeProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Esse é um blog de exemplo" />
      </Head>
      <Header />
      {category && <Category> Categoria: {category} </Category>}
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
