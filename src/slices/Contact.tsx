import * as React from 'react';
import { SliceProps } from '../models/types';
import Section from '../components/UI/Section';
import Heading from '../components/UI/Heading';
import ContactForm from '../components/ContactForm';

const Contact = ({ slice }: SliceProps) => {
  const { contact_title, form_endpoint } = slice.primary;

  return (
    <Section id="contact">
      <Heading type="articleTitle" field={contact_title.richText} />
      <ContactForm inputsArray={slice.items} />
    </Section>
  );
};

export default Contact;
