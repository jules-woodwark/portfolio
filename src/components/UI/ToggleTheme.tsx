import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';
import ReactTooltip, { Place } from 'react-tooltip';
import { device } from '../../theme/theme';
import { ToggleThemeProps } from '../../models/types';
import UiContext from '../../store/ui-context';

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
    props.contextType === 'body' &&
    `
    font-size: 1.5em;
    margin-bottom: 1rem;
    margin-top: 3rem;

    @media ${device.mobileS} {
      margin-top: 1rem;
    }

    @media ${device.mobileXL} {
      margin-top: 0;
      margin-bottom: 0;
      margin-right: 1rem;
    }
  `}

  ${(props) =>
    props.contextType === 'nav' &&
    `
      font-size: 1em;
      margin-right: 0.5em;
      border: 2px #FFF solid;
      border-radius: 50%;

      @media ${device.laptopL} {
        font-size: 0.8em;
      }
    `};

  ${(props) =>
    props.contextType === 'sideDrawer' &&
    `
      font-size: 1.25em;
      margin-right: 0;
    `}

  &:hover {
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
  const tooltipType = theme === 'light' ? 'dark' : 'light';
  const tooltipText =
    theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
  let place;

  switch (contextType) {
    case 'nav':
      place = 'left' as Place;
      break;
    case 'body':
      place = 'top' as Place;
      break;
    case 'sideDrawer':
      place = 'bottom' as Place;
      break;
  }

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
        type={tooltipType}
        id={`themeTip-${contextType}`}
        place={place}
        effect="solid"
      >
        {tooltipText}
      </ReactTooltip>
    </StyledDiv>
  );
};

export default ToggleTheme;
