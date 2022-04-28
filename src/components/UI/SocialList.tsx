import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SocialListProps, StyledIconProps } from '../../models/types';
import ReactTooltip from 'react-tooltip';
import Alert from './Alert';

const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

const ListItem = styled.li`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 1em;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transform: translateY(-1px);
    transition: all 0.1s ease-in-out;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 0;
  margin-left: 1rem;
  margin-top: 0;
`;

const StyledLinkedinIcon = styled(FaLinkedin)<StyledIconProps>`
  color: ${(props) => (props.$isWhite ? '#FFF' : '#2F4858')};
  font-size: 1.8em;
`;

const StyledGithubIcon = styled(FaGithub)<StyledIconProps>`
color: ${(props) => (props.$isWhite ? '#FFF' : '#2F4858')};
font-size: 1.8em;
`;

const StyledEnvelopeIcon  = styled(FaEnvelope)<StyledIconProps>`
color: ${(props) => (props.$isWhite ? '#FFF' : '#2F4858')};
font-size: 1.8em;
`;


const SocialList = ({
  email,
  linkedIn,
  gitHub,
  showEmail,
  isWhite,
}: SocialListProps) => {
  const [showAlert, setShowAlert] = useState(false);

  let alert = null;

  if (showAlert) {
    alert = <Alert text="copied to clipboard" />;
  }

  const copyEmailToClipboardHandler = () => {
    setShowAlert(true);
    navigator.clipboard.writeText(email);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <React.Fragment>
      <List>
        <ListItem
          data-tip
          data-for="emailTip"
          onClick={copyEmailToClipboardHandler}
        >
          <StyledEnvelopeIcon $isWhite={isWhite} />
          <Paragraph>{showEmail && email}</Paragraph>
        </ListItem>
        <ReactTooltip id="emailTip" place="bottom" effect="solid">
          Copy my email to clipboard
        </ReactTooltip>
        <ListItem data-tip data-for="gitHubTip">
          <a href={gitHub}>
            <StyledGithubIcon $isWhite={isWhite} />
          </a>
        </ListItem>
        <ReactTooltip id="gitHubTip" place="bottom" effect="solid">
          Go to my GitHub
        </ReactTooltip>
        <ListItem data-tip data-for="LinkedInTip">
          <a href={linkedIn}>
            <StyledLinkedinIcon $isWhite={isWhite} />
          </a>
        </ListItem>
        <ReactTooltip id="LinkedInTip" place="bottom" effect="solid">
          Go to my LinkedIn
        </ReactTooltip>
      </List>
      {alert}
    </React.Fragment>
  );
};

export default SocialList;
