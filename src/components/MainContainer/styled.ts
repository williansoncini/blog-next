import styled, { css } from 'styled-components';

export const MainContainer = styled.main`
  ${({ theme }) => css`
    max-width: 96rem;
    font-size: ${theme.font.sizes.medium};
    margin: 0 auto;
    padding: ${theme.spacings.medium};
  `}
`;
