import React, { useContext } from 'react';
import { ResumeButtonProps } from '../models/types';
import { StyledButton } from './UI/Button';
import UiContext from '../store/ui-context';
import styled, { css } from 'styled-components';

const defaultUiStyles = css`
  border: none;
  font-weight: inherit;
  letter-spacing: 0.2rem;
  margin: 0;
  padding: 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 125ms ease-in-out;

  &:hover,
  &:focus {
    box-shadow: none;
    opacity: 0.9;
    text-decoration: underline;
    transform: none;
  }
`;

const StyledResumeButton = styled(StyledButton)<ResumeButtonProps>`
  ${(props) =>
    props.contextType === 'nav' &&
    `
    ${defaultUiStyles};

    background-color: ${props.theme.uiBackground};

    &:hover {
      background-color: ${props.theme.uiBackground};
      color: ${props.theme.linkBackgroundHover};
    }
  `};

  ${(props) =>
    props.contextType === 'sideDrawer' &&
    `
    ${defaultUiStyles};
    background-color: inherit;
    color: ${props.theme.text};

    &:hover {
      background-color: ${props.theme.modalBackgroundColor};
      color: ${props.theme.linkBackgroundHover};
    }
  `};
`;

const ResumeButton = ({ contextType }: ResumeButtonProps) => {
  const uiCtx = useContext(UiContext);
  const { toggleResume, sideDrawerIsShown, toggleSideDrawer } = uiCtx;

  const handleClick = () => {
    sideDrawerIsShown && toggleSideDrawer();
    toggleResume();
  };

  return (
    <StyledResumeButton onClick={handleClick} contextType={contextType}>
      CV
    </StyledResumeButton>
  );
};

export default ResumeButton;
