import React, { Fragment, useContext, createRef } from 'react';
import styled from 'styled-components';
import UiContext from '../../store/ui-context';
import Backdrop from './Backdrop';
import CloseButton from './CloseButton';
import Logo from './Logo';
import NavItems from './NavItems';

const StyledSideDrawer = styled.div<{ isOpen: boolean }>`
  align-items: center;
  background-color: ${(props) => props.theme.sideDrawerBackground};
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  font-size: 1.5em;
  height: 100%;
  left: 0;
  padding: 2rem 1rem;
  position: fixed;
  top: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  width: 60%;
  z-index: 200;

  ${(props) =>
    props.isOpen &&
    `
    display: flex;
    transform: translateX(0);
    visibility: visible;
  `};
`;

const SideDrawer = () => {
  const uiCtx = useContext(UiContext);
  const { toggleSideDrawer, sideDrawerIsShown } = uiCtx;

  return (
    <Fragment>
      {sideDrawerIsShown && <Backdrop onClick={toggleSideDrawer} />}
      <StyledSideDrawer isOpen={sideDrawerIsShown}>
        <CloseButton onClick={toggleSideDrawer} closeType="sideDrawer" />
        <Logo isSideDrawer />
        <nav>
          <NavItems contextType="sideDrawer" />
        </nav>
      </StyledSideDrawer>
    </Fragment>
  );
};

export default SideDrawer;
