import * as React from 'react';
import { device } from '../../theme/theme';
import { SectionProps } from '../../models/types';
import styled from 'styled-components';

const StyledSection = styled.section<SectionProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4rem 0;
  font-weight: ${(props) => props.theme.fontWeight};

  ${(props) =>
    props.isHero &&
    `
    height: 100vh;
    margin: 0;

    @media ${device.mobileXL} {
      margin-top: -3rem;
    }
  `}

  ${(props) =>
    props.isResume &&
    `
    margin: 0;
`}
`;

const Section = ({ children, isHero, isResume, id }: SectionProps) => {
  return (
    <StyledSection id={id} isHero={isHero} isResume={isResume}>
      {children}
    </StyledSection>
  );
};

export default Section;
