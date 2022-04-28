import * as React from 'react';
import { SliceProps } from '../models/types';
import Section from '../components/UI/Section';
import Heading from '../components/UI/Heading';
import ProjectList from '../components/UI/ProjectList';

const Projects = ({ slice }: SliceProps) => {
  const { projects_title } = slice.primary;

  return (
    <Section>
      <Heading type="articleTitle" field={projects_title.richText} />
      <ProjectList projectsArray={slice.items} />
    </Section>
  )
};

export default Projects;