import * as React from 'react';
import { StyledButton } from './Button';
import { LinkButtonListItemProps } from '../../models/types';

const StyledLinkButton = StyledButton.withComponent('a');

const LinkButtonListItem = ({
  href,
  children,
  download,
}: LinkButtonListItemProps) => {
  return (
    <StyledLinkButton href={href} download={download} isCard>
      {children}
    </StyledLinkButton>
  );
};

export default LinkButtonListItem;
