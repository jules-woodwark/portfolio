import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../../theme/theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Space Mono', monospace;
    font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    height: 100vh;
    transition: background 0.50s linear, color 0.50s linear;
    width: 100%;
  }
  
  p {
    margin: 1rem 0;
  }
`;
