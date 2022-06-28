import React from 'react';
import { PostDate } from '../PostDate/index';
import * as Styled from './styled';
import Link from 'next/link';

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
      Publicado em <PostDate date={date} /> por {author}.{' | '}
      <Link href={`/categories/${category}`}>{category}</Link>
    </Styled.Container>
  );
};
