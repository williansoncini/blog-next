import React from 'react';
import { MainContainer } from '../MainContainer/index';
import * as Styled from './styled';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
  return <Styled.Container src={coverUrl} alt={alt}></Styled.Container>;
};
