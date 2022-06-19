import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.superLarge};
    margin: ${theme.spacings.large} 0;
    text-align: center;
  `}
`;
