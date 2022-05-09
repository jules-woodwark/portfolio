import React from 'react';
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
} from 'react-icons/ai';
import styled, { css } from 'styled-components';
import { AlertIconProps } from '../../models/types';

const alertIconStyles = css`
  font-size: 1.8em;
`;

const ErrorIcon = styled(AiOutlineCloseCircle)`
  ${alertIconStyles};
  color: ${(props) => props.theme.alertErrorColor};
`;

const SuccessIcon = styled(AiOutlineCheckCircle)`
  ${alertIconStyles};
  color: ${(props) => props.theme.alertSuccessColor};
`;

const WarningIcon = styled(AiOutlineExclamationCircle)`
  ${alertIconStyles};
  color: ${(props) => props.theme.alertWarningColor};
`;

const AlertIcon = ({ alertType }: AlertIconProps) => {
  let alertIcon;

  switch (alertType) {
    case 'error':
      alertIcon = <ErrorIcon />;
      break;
    case 'success':
      alertIcon = <SuccessIcon />;
      break;
    case 'warning':
      alertIcon = <WarningIcon />;
      break;
  }

  return alertIcon;
};

export default AlertIcon;
