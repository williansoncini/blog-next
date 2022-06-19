import styled, { css } from 'styled-components';

export const Container = styled.img`
  ${({ theme }) => css`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    margin-bottom: ${theme.spacings.medium};
    align-self: center;
  `}
`;
