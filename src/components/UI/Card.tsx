import * as React from 'react';
import styled from 'styled-components';
import { HOCProps } from '../../models/types';

const StyledCard = styled.article`
  background-color: ${(props) => props.theme.cardBackgroundColor};
  border-radius: 0.3rem;
  border: 2px solid #666666;
  display: flex;
  filter: grayscale(100%);
  flex-direction: column;
  height: 40vw;
  margin: 2rem 0;
  overflow: hidden;
  padding: 1.16rem 1rem;
  transition: all 400ms ease-in-out;
  &:hover,
  :focus {
    filter: grayscale(0%);
    transform: translateY(-1px);
    box-shadow: ${(props) => props.theme.cardBoxShadow};

    & img {
      transform: scale(1.1);
      filter: ${(props) => props.theme.cardImageFilter};
    }
  }
`;

const Card = ({ children }: HOCProps) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
