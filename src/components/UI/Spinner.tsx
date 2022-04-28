import * as React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

// import { breakpoints } from '../../theme/breakpoints';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled(FaSpinner)`
  font-size: 2.5rem;
  display: block;
  margin: 1rem 0;
  animation: ${spin} infinite 4s linear;
`;

const Spinner = () => {
  return <StyledSpinner />;
};

export default Spinner;

/*

  // @media ${breakpoints.tablet} {
  //   font-size: 3.5rem;
  // }

  // @media ${breakpoints.laptop} {
  //   font-size: 4.5rem;
  // }

*/
