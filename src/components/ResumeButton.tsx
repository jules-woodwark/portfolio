import React, { useContext } from 'react';
import UiContext from '../store/ui-context';
import Button from './UI/Button';

const ResumeButton = () => {
  const uiCtx = useContext(UiContext);
  const { toggleResume } = uiCtx;

  return (
    <Button onClick={toggleResume}>CV</Button>
  );
};

export default ResumeButton;