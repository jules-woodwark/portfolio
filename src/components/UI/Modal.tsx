import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { BackdropProps, ModalProps, HOCProps } from '../../models/types';

const SlideDownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
`;

const StyledModal = styled.aside`
  animation: ${SlideDownAnimation} 300ms ease-out forwards;
  background-color: white;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  left: 5%;
  padding: 1rem;
  position: fixed;
  top: 20vh;
  width: 90%;
  z-index: 30;
`;

const Backdrop = ({ onClose }: BackdropProps) => {
  return <StyledBackdrop onClick={onClose}></StyledBackdrop>;
};

const ModalOverlay = ({ children }: HOCProps) => {
  return <StyledModal>{children}</StyledModal>;
};

const portalElement = document.getElementById('modal');

const Modal = ({ onClose, children }: ModalProps) => {
  let modal = null;

  if (portalElement) {
    modal = (
      <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
        {ReactDOM.createPortal(
          <ModalOverlay>{children}</ModalOverlay>,
          portalElement
        )}
      </Fragment>
    );
  }

  return modal;
};

export default Modal;
