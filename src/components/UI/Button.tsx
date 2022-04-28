import * as React from 'react';
import { ButtonProps } from '../../models/types';
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-clip: padding-box;
  background-color: ${(props) => props.theme.buttonBackground};
  border-radius: 0.25rem;
  border: ${(props) => props.theme.buttonBorder};
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  text-decoration: none;
  transition: all 250ms;
  max-width: 30vw;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.buttonBackgroundHover};
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: ${(props) => props.theme.body};
  }

  &:hover {
    transform: translateY(-1px);
  }

  :disabled {
    cursor: not-allowed;
    background-color: #666666;
  }
`;

const Button = ({ children, onClick, type, disabled }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledButton type={type} onClick={handleClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
