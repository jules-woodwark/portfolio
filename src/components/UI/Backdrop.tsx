import React from 'react';
import styled from 'styled-components';
import { BackdropProps } from '../../models/types';

const StyledBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
`;

const Backdrop = ({ onClick, children, role, model, ariaLabel }: BackdropProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <StyledBackdrop
      onClick={handleClick}
      role={role}
      aria-modal={model}
      aria-labelledby={ariaLabel}
    >
      {children}
    </StyledBackdrop>
  );
};

export default Backdrop;
