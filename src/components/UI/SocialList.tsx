import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SocialListProps, StyledIconProps } from '../../models/types';
import { device } from '../../theme/theme';
import UiContext from '../../store/ui-context';
import ReactTooltip from 'react-tooltip';

const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

const ListItem = styled.li`
  align-items: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 0.5em;

  @media ${device.mobileXS} {
    margin: 0 0.75em;
  }

  @media ${device.mobileL} {
    margin: 0 1em;
  }

  & :hover {
    cursor: pointer;
    opacity: 0.8;
    transform: translateY(-1px);
    transition: all 0.1s ease-in-out;
  }
`;

const Paragraph = styled.p`
  display: none;
  margin-bottom: 0;
  margin-left: 1rem;
  margin-top: 0;

  @media ${device.mobileM} {
    display: flex;
  }
`;

const StyledLinkedinIcon = styled(FaLinkedin)<StyledIconProps>`
  color: ${(props) => (props.$isWhite ? '#FFF' : '#2F4858')};
  font-size: 1.8em;
`;

const StyledGithubIcon = styled(FaGithub)<StyledIconProps>`
  color: ${(props) => (props.$isWhite ? '#FFF' : '#2F4858')};
  font-size: 1.8em;
`;

const StyledEnvelopeIcon = styled(FaEnvelope)<StyledIconProps>`
  color: ${(props) => (props.$isWhite ? '#FFF' : '#2F4858')};
  font-size: 1.8em;
`;

const SocialList = ({
  email,
  linkedIn,
  gitHub,
  showEmail,
  isWhite,
  contextType,
}: SocialListProps) => {
  const uiCtx = useContext(UiContext);
  const { showAlert } = uiCtx;

  const copyEmailToClipboardHandler = () => {
    showAlert('success', 'Email copied to clipboard!');
    navigator.clipboard.writeText(email);
  };

  return (
    <List>
      <ListItem
        data-tip
        data-for={`emailTip-${contextType}`}
        onClick={copyEmailToClipboardHandler}
      >
        <StyledEnvelopeIcon $isWhite={isWhite} />
        <Paragraph>{showEmail && email}</Paragraph>
      </ListItem>
      <ReactTooltip
        id={`emailTip-${contextType}`}
        place="bottom"
        effect="solid"
      >
        Copy my email to clipboard
      </ReactTooltip>
      <ListItem data-tip data-for={`gitHubTip-${contextType}`}>
        <a href={gitHub}>
          <StyledGithubIcon $isWhite={isWhite} />
        </a>
      </ListItem>
      <ReactTooltip
        id={`gitHubTip-${contextType}`}
        place="bottom"
        effect="solid"
      >
        Go to my GitHub
      </ReactTooltip>
      <ListItem data-tip data-for={`linkedInTip-${contextType}`}>
        <a href={linkedIn}>
          <StyledLinkedinIcon $isWhite={isWhite} />
        </a>
      </ListItem>
      <ReactTooltip
        id={`linkedInTip-${contextType}`}
        place="bottom"
        effect="solid"
      >
        Go to my LinkedIn
      </ReactTooltip>
    </List>
  );
};

export default SocialList;
