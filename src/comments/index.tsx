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
        shortname="blog-next-3"
        config={{
          url: `http://vcap.me:3000/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </styled.Container>
  );
};
