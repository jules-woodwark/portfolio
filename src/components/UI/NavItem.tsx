import * as React from 'react';
import { NavItemProps } from '../../models/types';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  color: inherit;
  letter-spacing: 0.2rem;
  margin: 0 1em;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    opacity: 0.75;
    text-decoration: underline;
  }
`;

const NavItem = ({ url, text }: NavItemProps) => {
  return (
    <li>
      <StyledAnchor href={url}>{text}</StyledAnchor>
    </li>
  );
};

export default NavItem;
