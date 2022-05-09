import React, { useContext } from 'react';
import { NavProps } from '../../models/types';
import styled from 'styled-components';

import BurgerIcon from './BurgerIcon';
import NavItems from './NavItems';
import UiContext from '../../store/ui-context';

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-end;
  overflow: hidden;
  width: 100%;
`;

const Nav = ({ isMobile }: NavProps) => {
  const uiCtx = useContext(UiContext);
  const { toggleSideDrawer } = uiCtx;

  return (
    <StyledNav>
      {isMobile && <BurgerIcon onClick={toggleSideDrawer} />}
      {!isMobile && <NavItems contextType="nav" />}
    </StyledNav>
  );
};

export default Nav;
