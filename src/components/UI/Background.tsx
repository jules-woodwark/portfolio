import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { HOCProps } from '../../models/types';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const Background = ({ children }: HOCProps) => {
  const { backgroundImage } = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "images/background.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 3000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const image = getImage(backgroundImage);
  const bgImage = convertToBgImage(image);

  return (
    <BackgroundImage {...bgImage} preserveStackingContext>
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
