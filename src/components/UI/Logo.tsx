import * as React from 'react';
import { LogoProps } from '../../models/types';
import styled from 'styled-components';

const StyledLogoText = styled.h1<LogoProps>`
  color: inherit;
  letter-spacing: 0.2rem;
  padding-left: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;

  ${(props) => !props.isSideDrawer && `
    margin-right: auto;
    margin: 0;
  `}

  ${(props) => props.isSideDrawer && `
    color: ${props.theme.text}
    margin-bottom: 2rem;
`}
`;

const Logo = ({ isSideDrawer }: LogoProps) => {
  return <StyledLogoText isSideDrawer={isSideDrawer} >JW</StyledLogoText>;
};

export default Logo;