import * as React from 'react';
import styled from 'styled-components';
import { LinkButtonListProps } from '../../models/types';
import ResumeButton from '../ResumeButton';
import LinkButton from './LinkButton';

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  margin-top: 1rem;
`;

const StyledListItem = styled.li`
  margin-right: 1rem;
`;

const LinkButtonList = ({ array }: LinkButtonListProps) => {
  const linkButtonArray = array.map((item) => (
    <StyledListItem key={item.button_label}>
      <LinkButton href={item.button_link.url}>{item.button_label}</LinkButton>
    </StyledListItem>
  ));

  return (
    <StyledList>
      {linkButtonArray}
      <ResumeButton />
    </StyledList>
  );
};

export default LinkButtonList;
