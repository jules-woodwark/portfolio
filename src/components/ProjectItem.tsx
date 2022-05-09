import * as React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ProjectItemProps } from '../models/types';
import styled from 'styled-components';
import Card from './UI/Card';
import Heading from './UI/Heading';
import LinkButton from './UI/LinkButton';

const StyledGatsbyImage = styled(GatsbyImage)`
  display: flex;
  justify-content: flex-end;
  max-width: 30vw;
  transform: rotateX(31deg) rotateZ(15deg) scale(1.3);
  transform-style: preserve-3d;
`;

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

const ProjectItem = ({
  title,
  description,
  image,
  link,
  label,
}: ProjectItemProps) => {
  const projectImg = getImage(image);

  return (
    <Card>
      <Heading type="projectTitle" field={title} />
      <StyledDiv>
        <PrismicRichText field={description} />
        <StyledGatsbyImage image={projectImg!} alt={`${title} preview image`} />
      </StyledDiv>
      <LinkButton href={link}>{label}</LinkButton>
    </Card>
  );
};

export default ProjectItem;
