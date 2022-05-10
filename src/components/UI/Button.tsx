import * as React from 'react';
import { ButtonProps } from '../../models/types';
import { device } from '../../theme/theme';
import styled, { css } from 'styled-components';

export const buttonBaseStyles = css`
  box-sizing: border-box;
  cursor: pointer;
  font-weight: inherit;
  justify-content: center;
  text-decoration: none;
  transition: all 250ms;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  ${buttonBaseStyles};
  background-color: ${(props) => props.theme.buttonBackground};
  border-radius: 0.25rem;
  border: ${(props) => props.theme.buttonBorder};
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  color: #fff;
  display: inline-flex;
  justify-content: center;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.buttonBackgroundHover};
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: ${(props) => props.theme.body};
  }

  :disabled {
    background-color: #666666;
    cursor: not-allowed;
  }

  ${(props) =>
    props.isSideDrawer &&
    `
      background-color: ${props.theme.modalBackgroundColor};
      color: ${props.theme.text};

      &:hover {
        background-color: ${props.theme.modalBackgroundColor};
      }
  `}

  ${(props) =>
    props.isForm &&
    `
      margin-top: 1rem;
      
      @media (min-width: 540px) {
        margin-top: 0;
      }
  `}

  ${(props) =>
    props.isCard &&
    `
    text-align: center;
    
    @media ${device.tablet} {
      max-width: 25vw;
    }
    
  `}
`;

const Button = ({
  children,
  onClick,
  type,
  disabled,
  isNav,
  isSideDrawer,
  isForm,
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledButton
      type={type}
      onClick={handleClick}
      disabled={disabled}
      isNav={isNav}
      isSideDrawer={isSideDrawer}
      isForm={isForm}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
