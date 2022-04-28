import React, { useContext } from 'react';
import Modal from './UI/Modal';
import Section from './UI/Section';
import { StyledSectionTitle } from './UI/Heading';
import UiContext from '../store/ui-context';
import Button from './UI/Button';

const Resume = () => {
  const uiCtx = useContext(UiContext);
  const { toggleResume } = uiCtx;

  return (
    <Modal onClose={toggleResume}>
      <Section>
        <StyledSectionTitle>CV</StyledSectionTitle>
        <Button>Download PDF</Button>
      </Section>
    </Modal>
  );
};

export default Resume;
