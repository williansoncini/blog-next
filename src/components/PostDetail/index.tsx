import React from 'react';
import { PostDate } from '../PostDate/index';
import * as Styled from './styled';

export type PostDetailProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetail = ({
  date,
  author = '',
  category = '',
}: PostDetailProps) => {
  return (
    <Styled.Container>
      Publicado em <PostDate date={date} />
    </Styled.Container>
  );
};
