import * as React from 'react';
import styled from 'styled-components';
import { LinkButtonListProps } from '../../models/types';
import { device } from '../../theme/theme';
import ResumeButton from '../ResumeButton';
import LinkButton from './LinkButton';

const StyledList = styled.ul`
  display: none;
  list-style-type: none;
  margin-top: 1rem;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: row;
  }
`;

const StyledListItem = styled.li`
  margin-right: 0.2rem;

  @media ${device.mobileL} {
    margin-right: 0.5rem;
  }

  @media ${device.mobileXL} {
    margin-right: 1rem;
  }
`;

const LinkButtonList = ({ contextType, linksArray }: LinkButtonListProps) => {
  const linkButtonArray = linksArray.map((item) => (
    <StyledListItem key={item.button_label}>
      <LinkButton href={item.button_link.url}>{item.button_label}</LinkButton>
    </StyledListItem>
  ));

  return (
    <StyledList>
      {linkButtonArray}
      <ResumeButton contextType={contextType} />
    </StyledList>
  );
};

export default LinkButtonList;
