import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ToggleThemeProps } from '../../models/types';
import { device } from '../../theme/theme';
import UiContext from '../../store/ui-context';
import ReactTooltip from 'react-tooltip';

const StyledDiv = styled.div<ToggleThemeProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 2em;
  margin: 1rem 0;

  @media ${device.mobileXL} {
    margin-left: auto;
  }

  ${(props) =>
    props.contextType === 'nav' &&
    `
      font-size: 1em;
      margin-right: 0.5em;
      border: 2px #FFF solid;
      border-radius: 50%;
    `};

  ${(props) =>
    props.contextType === 'sideDrawer' &&
    `
      font-size: 1.25em;
      margin-right: 0;
    `}

  & :hover {
    cursor: pointer;
    opacity: 0.8;
    transform: translateY(-1px);
    transition: all 0.1s ease-in-out;
  }
`;

const iconStyles = css`
  background-color: ${(props) => props.theme.iconBackgroundColor};
  border-radius: 50%;
  color: ${(props) => props.theme.iconColor};
  padding: 0.5rem;
`;

const StyledMoonIcon = styled(FaMoon)`
  ${iconStyles}
`;

const StyledSunIcon = styled(FaSun)`
  ${iconStyles}
`;

const ToggleTheme = ({ contextType }: ToggleThemeProps) => {
  const uiCtx = useContext(UiContext);
  const { theme, toggleTheme } = uiCtx;
  const icon = theme === 'light' ? <StyledMoonIcon /> : <StyledSunIcon />;

  const tooltipText =
    theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <StyledDiv
      data-for={`themeTip-${contextType}`}
      data-tip
      contextType={contextType}
      onClick={handleClick}
    >
      {icon}
      <ReactTooltip
        id={`themeTip-${contextType}`}
        place="bottom"
        effect="solid"
      >
        {tooltipText}
      </ReactTooltip>
    </StyledDiv>
  );
};

export default ToggleTheme;
