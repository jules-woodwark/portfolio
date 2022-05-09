import React from 'react';
import { HeaderProps } from '../../models/types';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';

const StyledHeader = styled.header<HeaderProps>`
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.theme.uiBackground};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  color: white;
  display: flex;
  height: 3rem;
  justify-content: space-between;
  position: sticky;
  top: 0;
  transition: transform 150ms ease-in-out;
  z-index: 1;

  ${(props) =>
    props.isMobile
      ? `
    transform: none;
  `
      : `transform: ${props.showToolbar ? 'none' : 'translateY(-100%)'}`}
`;

const Header = ({ showToolbar, isMobile }: HeaderProps) => {
  return (
    <StyledHeader showToolbar={showToolbar} isMobile={isMobile}>
      <Logo />
      <Nav isMobile={isMobile} />
    </StyledHeader>
  );
};

export default Header;
