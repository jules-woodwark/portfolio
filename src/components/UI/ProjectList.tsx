import * as React from 'react';
import { ProjectListPropTypes } from '../../models/types';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projectsArray }: ProjectListPropTypes) => {
  const projectMap = projectsArray.map((project) => (
    <ProjectItem
      key={project.project_title.text}
      title={project.project_title.richText}
      description={project.project_description.richText}
      image={project.project_image.gatsbyImageData}
      link={project.project_link.url}
      label={project.project_label}
    />
  ));

  return (
    <React.Fragment>
      {projectMap}
    </React.Fragment>
  );
};

export default ProjectList;
