import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BurgerIconProps } from '../../models/types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.uiBackground};
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  margin-right: 0.25rem;

  & :hover {
    opacity: 0.75;
    transform: translateY(-1px);
    transition: all 0.1s ease-in-out;
  }
`;

const BurgerIcon = ({ onClick }: BurgerIconProps) => {
  return (
    <StyledButton
      type="button"
      aria-controls="navigation-drawer"
      onClick={onClick}
      aria-expanded="false"
    >
      <AiOutlineMenu />
    </StyledButton>
  );
};

export default BurgerIcon;
