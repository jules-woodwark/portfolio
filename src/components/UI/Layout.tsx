import React, { useEffect, useState, useContext, Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { HOCProps } from '../../models/types';
import { lightTheme, darkTheme } from '../../theme/theme';
import { Normalize } from 'styled-normalize';
import { useScrollListener } from '../../hooks/useScrollListener';
import UiContext from '../../store/ui-context';
import StyledBackground from './Background';
import Header from './Header';
import Footer from './Footer';
import CV from '../Resume';

const StyledMain = styled.main`
  padding: 0 10rem;
`;

const Layout = ({ children }: HOCProps) => {
  const uiCtx = useContext(UiContext);
  const [showHeader, setShowHeader] = useState(false);
  const scroll = useScrollListener();

  useEffect(() => {
    if (scroll.y > 900) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }, [scroll.y, scroll.lastY]);

  const { theme, resumeIsShown } = uiCtx;

  let content = (
    <Fragment>
      <Header showHeader={showHeader} />
      <StyledMain>
        {resumeIsShown && <CV />}
        {children}
      </StyledMain>
      <Footer />
    </Fragment>
  );

  if (theme === 'light') {
    content = (
      <StyledBackground>
        <Header showHeader={showHeader} />
        <StyledMain>
          {resumeIsShown && <CV />}
          {children}
        </StyledMain>
        <Footer />
      </StyledBackground>
    );
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Normalize />
      {content}
    </ThemeProvider>
  );
};

export default Layout;
