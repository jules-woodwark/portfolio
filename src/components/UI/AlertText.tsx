import React from 'react';
import { AlertMessageProps } from '../../models/types';
import styled from 'styled-components';

const StyledAlertMessage = styled.p<{
  alertType: 'error' | 'success' | 'warning';
}>`
  position: relative;
  margin: 0 0.6rem;

  ${(props) =>
    props.alertType === 'error' &&
    ` 
    color: ${props.theme.alertErrorColor};
  `}

  ${(props) =>
    props.alertType === 'success' &&
    `
    color: ${props.theme.alertSuccessColor};
  `}

  ${(props) =>
    props.alertType === 'warning' &&
    `
    color: ${props.theme.alertWarningColor};
  `}
`;

const AlertText = ({ alertType, text }: AlertMessageProps) => {
  return (
    <StyledAlertMessage role="alert" alertType={alertType}>
      {text}
    </StyledAlertMessage>
  );
};

export default AlertText;
