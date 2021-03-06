import React from 'react';
import { formatDate } from '../../utils/formatDate';
import * as Styled from './styled';

export type PostDateProps = {
  date: string;
};

export const PostDate = ({ date }: PostDateProps) => {
  return <Styled.Container> {formatDate(date)}</Styled.Container>;
};
