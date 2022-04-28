import * as React from 'react';
import styled from 'styled-components';
import { PrismicRichText } from '@prismicio/react';
import { HeadingProps } from '../../models/types';

const StyledHeroTitle = styled.h1`
  color: ${(props) => props.theme.text};
  letter-spacing: 0.1rem;
  font-size: 2.5em;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const StyledHeroSubTitle = styled.h2`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: ${(props) => props.theme.heroSubTitleBackground};
  letter-spacing: 0.1rem;
  font-size: 2em;
  color: #fff8ee;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const StyledSectionTitle = styled.h2`
  align-items: center;
  color: ${(props) => props.theme.text};
  font-size: 3em;
  justify-content: center;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const StyledProjectTitle = styled.h3`
  background-color: ${(props) => props.theme.uiBackground};
  padding: 0 0.5rem;
  color: white;
  margin-right: auto;
  font-size: 1.7em;
  line-height: 1.7em;
`;

const Heading = ({ type, field }: HeadingProps) => {
  let component: JSX.Element | null;

  switch (type) {
    case 'heroTitle':
      return (component = (
        <PrismicRichText
          field={field}
          components={{
            heading1: ({ children }) => (
              <StyledHeroTitle>{children}</StyledHeroTitle>
            ),
          }}
        />
      ));
    case 'heroSubTitle':
      return (component = (
        <PrismicRichText
          field={field}
          components={{
            heading2: ({ children }) => (
              <StyledHeroSubTitle>{children}</StyledHeroSubTitle>
            ),
          }}
        />
      ));
    case 'articleTitle':
      return (component = (
        <PrismicRichText
          field={field}
          components={{
            heading2: ({ children }) => (
              <StyledSectionTitle>{children}</StyledSectionTitle>
            ),
          }}
        />
      ));
    case 'projectTitle':
      return (component = (
        <PrismicRichText
          field={field}
          components={{
            heading3: ({ children }) => (
              <StyledProjectTitle>{children}</StyledProjectTitle>
            ),
          }}
        />
      ));
    default:
      return null;
  }
};

export default Heading;
