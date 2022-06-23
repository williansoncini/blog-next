import { DiscussionEmbed } from 'disqus-react';
import * as styled from './styled';

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <styled.Container>
      <DiscussionEmbed
        shortname="blog-next-5"
        config={{
          url: `${process.env.SITE_URL}/post/slug`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </styled.Container>
  );
};
