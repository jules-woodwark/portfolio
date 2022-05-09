import React, { useState, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import UiContext from '../../store/ui-context';
import AlertIcon from './AlertIcon';
import AlertText from './AlertText';
import CloseButton from './CloseButton';

const AlertContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.modalBackgroundColor};
  border-radius: 0.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  bottom: 0;
  display: flex;
  flex-direction: row;
  font-size: 0.9em;
  justify-content: center;
  left: 0;
  margin-bottom: 1rem;
  margin-left: 1rem;
  padding: 0.8rem 0.6rem;
  position: fixed;

  &.enter {
    transform: translateY(-10px);
    opacity: 0.01;
  }

  &.enter-active {
    opacity: 1;
    transform: translateY(10px);
    transition: all 400ms ease-in;
  }

  &.exit {
    opacity: 1;
  }

  &.exit-active {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: all 400ms ease-in;
  }
`;

const portalElement =
  typeof document !== 'undefined' ? document.getElementById('alert') : null;

const Alert = () => {
  const [animate, setAnimate] = useState(false);
  const uiCtx = useContext(UiContext);
  const { alert, setAlert } = uiCtx;

  useEffect(() => {
    if (alert) {
      setAnimate(true);
    }

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [alert]);

  const handleClick = () => {
    setAnimate(false);
  };

  const handleExit = () => {
    setAlert(null);
  };

  if (alert && portalElement) {
    return createPortal(
      <CSSTransition
        in={animate}
        timeout={400}
        mountOnEnter
        unmountOnExit
        onExited={handleExit}
      >
        <AlertContainer>
          <AlertIcon alertType={alert.type} />
          <AlertText alertType={alert.type} text={alert.message} />
          <CloseButton onClick={handleClick} closeType={alert.type} />
        </AlertContainer>
      </CSSTransition>,
      portalElement
    );
  } else return null;
};

export default Alert;
