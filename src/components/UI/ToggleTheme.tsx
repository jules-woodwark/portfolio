import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';
import UiContext from '../../store/ui-context';
import ReactTooltip from 'react-tooltip';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-top: 0;

  & :hover {
    cursor: pointer;
    transform: translateY(-1px);
  }
`;

const iconStyles = css`
  background-color: ${(props) => props.theme.iconBackgroundColor};
  border-radius: 50%;
  color: ${(props) => props.theme.iconColor};
  font-size: 2.5rem;
  padding: 0.5rem;
`;

const StyledMoonIcon = styled(FaMoon)`
  ${iconStyles}
`;

const StyledSunIcon = styled(FaSun)`
  ${iconStyles}
`;

const ToggleTheme = () => {
  const uiCtx = useContext(UiContext);
  const { theme, toggleTheme } = uiCtx;
  const icon =
    theme === 'light' ? (
      <StyledMoonIcon onClick={toggleTheme} />
    ) : (
      <StyledSunIcon onClick={toggleTheme} />
    );

  const tooltipText =
    theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';

  return (
    <StyledDiv data-tip data-for="themeTip">
      {icon}
      <ReactTooltip id="themeTip" place="bottom" effect="solid">
        {tooltipText}
      </ReactTooltip>
    </StyledDiv>
  );
};

export default ToggleTheme;
