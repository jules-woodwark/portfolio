import * as React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ProfilePhotoProps } from '../models/types';

const StyledGatsbyImage = styled(GatsbyImage)`
  border-radius: 0.5rem;
  max-height: 300px;
  max-width: 300px;
`;

const ProfilePhoto = ({ image }: ProfilePhotoProps) => {
  const profileImg = getImage(image);
  if (profileImg) {
    return <StyledGatsbyImage image={image} alt={'jules'} />;
  } else {
    return null;
  }
};

export default ProfilePhoto;
