import * as React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { SliceProps } from '../models/types';
import Section from '../components/UI/Section';
import Heading from '../components/UI/Heading';

const About = ({ slice }: SliceProps) => {
  const { about_title, about_description } = slice.primary;
  
  return (
    <Section id="about">
      <Heading type="articleTitle" field={about_title.richText} />
      <PrismicRichText field={about_description.richText} />
    </Section>
  );
};

export default About;
