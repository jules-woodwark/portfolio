import * as React from 'react';
import styled from 'styled-components';
import { HeaderProps } from '../../models/types';

import Author from './Author';
import Nav from './Nav';

const StyledHeader = styled.header<HeaderProps>`
  align-items: center;
  background-color: ${(props) => props.theme.uiBackground};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  color: white;
  display: flex;
  height: 3rem;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  transform: ${(props) => (props.showHeader ? 'none' : 'translateY(-100%)')};
  transition: transform 150ms ease-in-out;
  z-index: 1;
`;

const Header = (props: HeaderProps) => {
  const { showHeader } = props;

  return (
    <StyledHeader showHeader={showHeader}>
      <Author />
      <Nav />
    </StyledHeader>
  );
};

export default Header;
