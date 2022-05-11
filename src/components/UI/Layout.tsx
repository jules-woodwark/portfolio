import React, { Fragment, useEffect, useState, useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { device } from '../../theme/theme';
import { GlobalStyle } from './GlobalStyle';
import { HOCProps } from '../../models/types';
import { lightTheme, darkTheme } from '../../theme/theme';
import { Normalize } from 'styled-normalize';
import { Parallax } from 'react-scroll-parallax';
import { useScrollListener } from '../../hooks/useScrollListener';
import UiContext from '../../store/ui-context';
import useWindowSize from '../../hooks/useWindowSize';

import Alert from './Alert';
import ConditionalWrapper from '../ConditionalWrapper';
import Footer from './Footer';
import Header from './Header';
import Resume from '../Resume';
import SEO from '../SEO';
import SideDrawer from './SideDrawer';
import StyledBackground from './Background';

const StyledMain = styled.main`
  margin: auto;
  margin-top: ${(props) => props.theme.mainMarginTop};
  margin-bottom: ${(props) => props.theme.mainMarginBottom};
  padding: 0 0.5rem;

  @media ${device.mobileM} {
    padding: 0 1rem;
  }

  @media ${device.mobileXL} {
    padding: 0 1.5rem;
  }

  @media ${device.tablet} {
    padding: 0 5rem;
  }

  @media ${device.laptop} {
    max-width: 70vw;
  }

  @media ${device.laptopL} {
    max-width: 50vw;
  }
`;

const Layout = ({ children }: HOCProps) => {
  const uiCtx = useContext(UiContext);
  const [toolbarIsSolid, setToolbarIsSolid] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const scroll = useScrollListener();
  const windowSize = useWindowSize();

  const { theme, resumeIsShown, alert } = uiCtx;

  useEffect(() => {
    if (scroll.y > 850) {
      setToolbarIsSolid(true);
    } else {
      setToolbarIsSolid(false);
    }
  }, [scroll.y, scroll.lastY]);

  useEffect(() => {
    if (windowSize.width && windowSize.width > 500) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [windowSize.width]);

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
          <Header isSolid={toolbarIsSolid} isMobile={isMobile} />
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
