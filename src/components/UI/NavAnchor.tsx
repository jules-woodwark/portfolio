import * as React from 'react';
import { NavAnchorProps } from '../../models/types';
import { device } from '../../theme/theme';
import styled from 'styled-components';

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
  return <StyledAnchor href={url}>{text}</StyledAnchor>;
};

export default NavAnchor;
