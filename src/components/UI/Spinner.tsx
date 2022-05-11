import * as React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled(FaSpinner)`
  animation: ${spin} infinite 4s linear;
  color: ${(props) => props.theme.text};
  display: block;
  font-size: 2.5rem;
  margin: 1rem 0;
`;

const Spinner = () => {
  return <StyledSpinner />;
};

export default Spinner;
