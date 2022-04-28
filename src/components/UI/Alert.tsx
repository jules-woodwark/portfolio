import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { AlertProps } from '../../models/types';

const alertFadeInOut = keyframes`
  0% {
    background-color: transparent;
  }
  50% {
    background-color: white;
  }
  100% {
    background-color: transparent;
  }
`;

const alertContentFadeInOut = keyframes`
  0% {
    opacity: 0;
    top: -20px;
  }
  50% {
    opacity: 1;
    top: 0;
  }
  100% {
    opacity: 0;
    top: -20px;
  }
`;

const StyledDiv = styled.div`
  font-size: 0.75rem;
  background-color: transparent;
  animation: ${alertFadeInOut} 2s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;


  & p {
    opacity: 0;
    position: relative;
    animation: ${alertContentFadeInOut} 1.6s 0.4s
      cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    color: #007668;
    margin: 0 1rem;
    padding: 0.4rem 0.6rem;
  }

`;

const StyledIcon = styled(FaCheckCircle)`
  opacity: 0;
  animation: ${alertContentFadeInOut} 1.6s 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
  color: #007668;
  margin-left: 1rem;
`;

const Alert = ({ text }: AlertProps) => {
  return (
    <StyledDiv>
      <StyledIcon />
      <p>{text}</p>
    </StyledDiv>
  );
};

export default Alert;
