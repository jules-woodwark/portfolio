import * as React from 'react';
import styled from 'styled-components';

const StyledLogoText = styled.h1`
  color: inherit;
  letter-spacing: 0.2rem;
  margin: 0;
  margin-right: auto;
  padding-left: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
`;

const Author = () => {
  return <StyledLogoText>JW</StyledLogoText>;
};

export default Author;