import React, { Fragment, useEffect, useState, useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { HOCProps } from '../../models/types';
import { lightTheme, darkTheme } from '../../theme/theme';
import { Normalize } from 'styled-normalize';
import { useScrollListener } from '../../hooks/useScrollListener';
import { device } from '../../theme/theme';
import useWindowSize from '../../hooks/useWindowSize';
import UiContext from '../../store/ui-context';
import Alert from './Alert';
import ConditionalWrapper from '../ConditionalWrapper';
import Footer from './Footer';
import Header from './Header';
import Resume from '../Resume';
import SEO from '../SEO';
import SideDrawer from './SideDrawer';
import StyledBackground from './Background';
import { Parallax } from 'react-scroll-parallax';

const StyledMain = styled.main`
  margin: auto;
  margin-top: ${(props) => props.theme.mainMarginTop};
  margin-bottom: ${(props) => props.theme.mainMarginBottom};
  padding: 0 0.5rem;

  @media ${device.mobileM} {
    padding: 0 1rem;
  }

  @media ${device.mobileXL} {
    padding: 0 2.5rem;
  }

  @media ${device.tablet} {
    padding: 0 5rem;
  }

  @media ${device.laptop} {
    padding: 0 10rem;
    max-width: 70vw;
  }

  @media ${device.laptopL} {
    max-width: 60vw;
  }
`;

const Layout = ({ children }: HOCProps) => {
  const uiCtx = useContext(UiContext);
  const [showToolbar, setShowToolbar] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const scroll = useScrollListener();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (scroll.y > 850) {
      setShowToolbar(true);
    } else {
      setShowToolbar(false);
    }
  }, [scroll.y, scroll.lastY]);

  useEffect(() => {
    if (windowSize.width && windowSize.width > 500) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [windowSize.width]);

  const { theme, resumeIsShown, alert } = uiCtx;
  const showParallex = theme === 'light' ? true : false;

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Normalize />
      <SEO />
      <ConditionalWrapper
        condition={showParallex}
        wrapper={(children) => <StyledBackground>{children}</StyledBackground>}
      >
        <Fragment>
          <Header showToolbar={showToolbar} isMobile={isMobile} />
          {isMobile && <SideDrawer />}
          <Parallax speed={-30}>
            <StyledMain>
              {resumeIsShown && <Resume />}
              {children}
              {alert && <Alert />}
            </StyledMain>
          </Parallax>
          <Footer />
        </Fragment>
      </ConditionalWrapper>
    </ThemeProvider>
  );
};

export default Layout;
