import * as React from 'react';
import styled from 'styled-components';
import { SectionProps } from '../../models/types';

const StyledSection = styled.section<SectionProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10rem 0;
  font-weight: 600;

  ${(props) => props.isHero && `
    height: 100vh;
    margin: 0;
    margin-top: -3rem;
  `}

`;

const Section = ({ children, isHero }: SectionProps) => {
  return (
    <StyledSection isHero={isHero}>
      {children}
    </StyledSection>
  );
};

export default Section;
