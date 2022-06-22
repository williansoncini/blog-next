import React from 'react';
import * as Styled from './styled';

export type PostContentProps = {
  content: string;
};

export const PostContent = ({ content }: PostContentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: content }} />;
};
