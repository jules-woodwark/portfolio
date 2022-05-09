import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HOCProps } from '../../models/types';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const Background = ({ children }: HOCProps) => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "images/background.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imageData = data.backgroundImage.childImageSharp.fluid;

  return (
    <BackgroundImage
      fluid={imageData}
      style={{
        backgroundSize: '',
        backgroundPosition: '',
        backgroundRepeat: '',
      }}
    >
      {children}
    </BackgroundImage>
  );
};

const StyledBackground = styled(Background)`
  background-repeat: repeat-y;
  background-size: contain;
  max-width: 100vw;
  overflow: hidden;
`;

export default StyledBackground;
