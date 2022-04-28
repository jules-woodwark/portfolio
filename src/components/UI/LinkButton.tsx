import * as React from 'react';
import { StyledButton } from './Button';
import { LinkButtonListItemProps } from '../../models/types';

const StyledLinkButton = StyledButton.withComponent('a');

const LinkButtonListItem = ({ href, children }: LinkButtonListItemProps) => {
  return <StyledLinkButton href={href}>{children}</StyledLinkButton>;
};

export default LinkButtonListItem;