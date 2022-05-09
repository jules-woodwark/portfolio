import * as React from 'react';
import { SliceProps } from '../models/types';
import Section from '../components/UI/Section';
import Heading from '../components/UI/Heading';
import Form from '../components/Form';

const Contact = ({ slice }: SliceProps) => {
  const { contact_title, form_endpoint } = slice.primary;

  return (
    <Section id="contact">
      <Heading type="articleTitle" field={contact_title.richText} />
      <Form inputsArray={slice.items} />
    </Section>
  );
};

export default Contact;
