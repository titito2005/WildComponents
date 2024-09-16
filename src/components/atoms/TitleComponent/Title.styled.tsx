import styled from 'styled-components';
import { TitleProps } from './Title';

export const StyledTitle = styled.h1<TitleProps>`
  ${({
    fontSize = '2rem',
    fontFamily = 'Trebuchet MS, sans-serif',
    bold = false,
    color = '500',
    degraded = '',
    theme,
  }) => `
    font-size: ${fontSize};
    font-family: ${fontFamily};
    font-weight: ${bold ? 'bold' : '100'};
    ${
      degraded
        ? `
          background-image: linear-gradient(10deg, ${theme.colors[color]}, ${theme.colors[degraded]});
          -webkit-background-clip: text;
          color: transparent;
        `
        : `color: ${theme.colors[color] || color};`
    }
  `}
`;
