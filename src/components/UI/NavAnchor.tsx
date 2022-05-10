import React, { useContext } from 'react';
import { NavAnchorProps } from '../../models/types';
import { device } from '../../theme/theme';
import styled from 'styled-components';
import UiContext from '../../store/ui-context';

const StyledAnchor = styled.a`
  color: ${(props) => props.theme.text};
  letter-spacing: 0.2rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 125ms ease-in-out;

  &:hover {
    color: ${(props) => props.theme.linkBackgroundHover};
    opacity: 0.9;
    text-decoration: underline;
  }

  @media ${device.mobileXL} {
    color: #fff;
  }
`;

const NavAnchor = ({ url, text }: NavAnchorProps) => {
  const uiCtx = useContext(UiContext);

  const { sideDrawerIsShown, toggleSideDrawer } = uiCtx;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    sideDrawerIsShown && toggleSideDrawer();
  };

  return (
    <StyledAnchor onClick={handleClick} href={url}>
      {text}
    </StyledAnchor>
  );
};

export default NavAnchor;
