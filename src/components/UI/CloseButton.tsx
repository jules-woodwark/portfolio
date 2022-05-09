import React from 'react';
import styled, { css } from 'styled-components';
import { MdClose } from 'react-icons/md';
import { buttonBaseStyles } from './Button';
import { CloseButtonProps } from '../../models/types';

const alertDefaultStyles = css`
  border: none;
  font-size: 0.5em;
`;

const StyledCloseButton = styled.button<CloseButtonProps>`
  ${buttonBaseStyles};
  align-items: center;
  border-radius: 50%;
  border: 1px solid #fff;
  display: inline-flex;
  margin-left: auto;
  padding: 0.75em;

  ${(props) =>
    props.closeType === 'modal' &&
    `
    background-color: ${props.theme.buttonBackground};
    border: none;
    color: white;
    font-size: 0.9em;

    &:hover,
    &:focus {
      background-color: ${props.theme.buttonBackgroundHover};
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      color: ${props.theme.body};
    }
  `}

  ${(props) =>
    props.closeType === 'sideDrawer' &&
    `
    background-color: ${props.theme.uiBackground};
    border: none;
    color: white;
    font-size: 0.6em;

    &:hover,
    &:focus {
      background-color: ${props.theme.buttonBackgroundHover};
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      color: ${props.theme.body};
    }
  `}

  ${(props) =>
    props.closeType === 'error' &&
    `
      ${alertDefaultStyles};
      background-color: ${props.theme.alertErrorColor};
  
    `}

  ${(props) =>
    props.closeType === 'success' &&
    `
      ${alertDefaultStyles};
      background-color: ${props.theme.alertSuccessColor};
  
    `}
  
    ${(props) =>
    props.closeType === 'warning' &&
    `
      ${alertDefaultStyles};
      background-color: ${props.theme.alertWarningColor};
  
    `}
`;

const StyledCloseIcon = styled(MdClose)`
  font-size: 1.5em;
`;

const CloseButton = ({ onClick, closeType }: CloseButtonProps) => {
  const handleClick = () => onClick();

  return (
    <StyledCloseButton onClick={handleClick} closeType={closeType}>
      <StyledCloseIcon />
    </StyledCloseButton>
  );
};

export default CloseButton;
