import React from 'react';
import * as Styled from './styled';

export type MainContainerProps = {
  children: React.ReactNode;
};

export const MainContainer = ({ children }: MainContainerProps) => {
  return <Styled.MainContainer>{children}</Styled.MainContainer>;
};
